import React from "react";
import { useEffect, useReducer, useState } from "react";
import LoadingSpinner from "../Utility/LoadingSpinner";
import personReducer from "../Reducers/personReducer";
import { setUsers } from "../Actions/PersonActions";
import PersonConstants from "../Utility/Person.Constants";

import "./PersonSelect.css";

const initialState = {
  userList: [],
  selectedUser: [],
  isAllUserSelected: false,
};

export default function PersonSelect() {
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

  const selectUser = (user) => {
    const { selectedUser } = users;
    const ifUserAlreadySelected = selectedUser.filter((e) => e.id === user.id);

    if (ifUserAlreadySelected.length) {
      dispatch({
        type: PersonConstants.deSelectPerson,
        payload: user,
      });
    } else {
      dispatch({
        type: PersonConstants.selectPerson,
        payload: user,
      });
    }
  };

  const selectAllUsers = () => {
    const { isAllUserSelected } = users;

    console.log("isAllUserSelected", isAllUserSelected);

    if (!isAllUserSelected) {
      dispatch({
        type: PersonConstants.selectAllUser,
      });
    } else {
      dispatch({
        type: PersonConstants.deselectAllUser,
      });
    }
  };

  const renderUserList = () => {
    const { userList, selectedUser } = users;
    if (userList.length) {
      const data = userList.map((dataObject) => {
        return (
          <li key={dataObject.id} class="list-group-item">
            {dataObject.name}
            <span className="subpara-intro">
              <small className="text-body-secondary">
                {dataObject.address.city}
              </small>
            </span>
            <span className="subpara-intro">
              <small className="text-body-secondary">
                {dataObject.address.suite}
              </small>
            </span>
            <span className="subpara-intro">
              <small className="text-body-secondary">
                {dataObject.address.zipcode}
              </small>
            </span>
            <span>
              <label className="available-icon"></label>
            </span>
            <span className="person-select-check">
              <input
                name="selectUser"
                className="form-check-input mt-1"
                type="checkbox"
                value={dataObject.id}
                aria-label="Checkbox for following text input"
                title={`Select ${dataObject.name}`}
                onClick={() => selectUser(dataObject)}
                checked={
                  selectedUser.filter((e) => e.id === dataObject.id).length >
                    0 && true
                }
              />
            </span>
          </li>
        );
      });
      return data.length ? data : [];
    }
  };

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  // console.log("users", users);

  return (
    <div className="row" style={{ padding: "10px" }}>
      <div className="col-12">
        <div className="card">
          <div className="select-all-person">
            {PersonConstants.availableEmployees}
          </div>
          <span className="mt-3 person-select-check">
            <input
              name="selectAllUser"
              className="form-check-input mt-1"
              type="checkbox"
              aria-label="Checkbox for following text input"
              title={`Select all available users`}
              onClick={selectAllUsers}
            />
          </span>
          <ul className="list-group list-group-flush">
            {loading ? <LoadingSpinner /> : renderUserList()}
          </ul>
        </div>
      </div>
    </div>
  );
}
