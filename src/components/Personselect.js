import { useEffect, useReducer, useState } from "react";
import LoadingSpinner from "../Utility/LoadingSpinner";
import personReducer from "../Reducers/personReducer";
import { setUsers } from "../Actions/PersonActions";

import "./PersonSelect.css";

const initialState = {
  userList: [],
  selectedUser: [],
  isAllUserSelected: false,
};

export default function Personselect() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, dispatch] = useReducer(personReducer, initialState);

  const fetchUserList = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setUsers(dispatch, data);
  };

  useEffect(() => {
    try {
      fetchUserList();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setErrorMessage(`Error ${e.response.data}`);
    }
  }, []);

  const renderUserList = () => {
    const { userList } = users;
    console.log("userList", userList[0]);
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
                onClick={() =>
                  dispatch({ type: "SELECT_PERSON", payload: dataObject })
                }
              />
            </span>
          </li>
        );
      });
      return data || [];
    }
  };

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

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
