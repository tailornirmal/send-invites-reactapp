import React from "react";
import { useEffect, useReducer, useState } from "react";
import LoadingSpinner from "../Utility/LoadingSpinner";
import personReducer from "../Reducers/personReducer";
import { setUsers } from "../Actions/PersonActions";
import {
  PersonConstants,
  availableMeetingRooms,
} from "../Utility/Person.Constants";

import "./PersonSelect.css";

let initialState = {
  userList: [],
  selectedUser: [],
  isAllUserSelected: false,
  from: "meeting.tailorsthought@ymail.com",
  subject: "",
  to: "",
  time: "",
  room: "",
  message: "",
};

export default function PersonSelect() {
  const URL = PersonConstants.fetchURL;
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, dispatch] = useReducer(personReducer, initialState);

  const fetchUserList = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setUsers(dispatch, data);
    } catch (E) {
      setErrorMessage("Error", E);
    }
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
    const ifUserAlreadySelected =
      selectedUser && selectedUser.filter((e) => e.id === user.id);

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
    if (userList && userList.length) {
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
                  selectedUser &&
                  selectedUser.filter((e) => e.id === dataObject.id).length >
                    0 &&
                  true
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

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    const { name, value } = e.target;

    dispatch({
      type: "UPDATE_FORM_FIELD",
      payload: { name: name, value: value },
    });
  };

  const renderSelectedUsers = () => {
    const { selectedUser } = users;
    const allSelectedUsers = selectedUser.map((e) => e.name);
    return allSelectedUsers;
  };

  console.log("users", users);

  const sendInvite = () => {};

  return (
    <div className="row col-12" style={{ padding: "10px" }}>
      <div className="col-6">
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
      <div className="col-6">
        <div>
          <div className="input-group input-group-sm mb-3 flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              From
            </span>
            <input
              type="text"
              readOnly
              className="form-control"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              required
              value={users.from}
              disabled
            />
          </div>
          <div className="input-group input-group-sm mb-3 flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              Subject
            </span>
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Meeting Purpose"
              aria-label="figma"
              aria-describedby="addon-wrapping"
              onChange={handleChange}
            />
          </div>
          <div className="input-group input-group-sm mb-3 flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              To
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Person 1, Person 2"
              aria-label="figma"
              aria-describedby="addon-wrapping"
              value={renderSelectedUsers()}
            />
          </div>
          <div className="input-group input-group-sm mb-3 flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              Room
            </span>

            <select
              className="form-select form-select-sm"
              aria-label="Small select example"
              defaultValue={0}
              onChange={handleChange}
              name="room"
            >
              {availableMeetingRooms.map((e) => {
                return <option value={e.id}>{e.name}</option>;
              })}
            </select>
          </div>
          <div className="input-group input-group-sm mb-3 flex-nowrap">
            <textarea
              rows={8}
              className="form-control"
              aria-label="with textarea"
              onChange={handleChange}
              name="message"
            ></textarea>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={sendInvite}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
