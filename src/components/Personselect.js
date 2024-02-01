import { useEffect, useReducer, useState } from "react";
import personReducer from "../reducers/personReducer";
import LoadingSpinner from "../Utility/LoadingSpinner";

import "./Personselect.css";

export default function Personselect() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, dispatch] = useReducer(personReducer, [{}]);

  const fetchUserList = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return setUserList(data);
  };

  // console.log("users", dispatch);

  useEffect(() => {
    console.log("calling fetchUserList");
    try {
      fetchUserList();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setErrorMessage("Server is not available");
    }
  }, []);

  console.log("loading", loading);

  const renderUserList = () => {
    if (userList.length) {
      const data = userList.map((dataObject) => {
        return (
          <li key={dataObject.id} class="list-group-item">
            {dataObject.name}
            <span className="person-select-check">
              <input
                className="form-check-input mt-1"
                type="checkbox"
                value={dataObject.id}
                aria-label="Checkbox for following text input"
                title={`Select ${dataObject.name}`}
                onClick={() => selectUser(dataObject)}
              />
            </span>
          </li>
        );
      });
      return data || [];
    }
  };

  const selectUser = (object) => {
    console.log(object);
  };

  return (
    <div className="row" style={{ padding: "10px" }}>
      <div className="col-12">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">Select Person to Invite</div>
          <ul className="list-group list-group-flush">
            {loading ? <LoadingSpinner /> : renderUserList()}
          </ul>
        </div>
      </div>
    </div>
  );
}
