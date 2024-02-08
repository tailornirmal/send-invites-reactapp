import React from "react";
import { useEffect, useReducer, useState } from "react";
import LoadingSpinner from "../Utility/LoadingSpinner";
import personReducer from "../Reducers/personReducer";
import { setUsers } from "../Actions/PersonActions";
import RenderList from "./RenderList";
import RenderSelectedList from "./RenderSelectedList";
import { PersonConstants } from "../Utility/Person.Constants";
import InvitePreview from "./InvitePreview";

import "./PersonSelect.css";

let initialState = {
  userList: [],
  selectedUser: [],
  isAllUserSelected: false,
  from: "meeting.tailorsthought@ymail.com",
  subject: "",
  to: "",
  room: "",
  message: "",
};

export default function PersonSelect() {
  const URL = PersonConstants.fetchURL;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, dispatch] = useReducer(personReducer, initialState);
  const [formError, setFormError] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        setLoading(true);
        const res = await fetch(URL);
        const data = await res.json();
        setUsers(dispatch, data);
      } catch (error) {
        setErrorMessage("Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserList();
  }, [URL]);

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

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "UPDATE_FORM_FIELD",
      payload: { name: name, value: value },
    });
    setFormError(false);
  };

  const renderSelectedUsers = () => {
    const { selectedUser } = users;
    const allSelectedUsers = selectedUser.map((e) => e.name);
    return allSelectedUsers;
  };

  console.log("users", users);

  const sendInvite = (e) => {
    // console.log("send invite clicked");
    const { from, subject, selectedUser, room, message } = users;

    // console.log(users);

    if (!from || !subject || selectedUser.length < 1 || !room || !message) {
      setFormError(true);
      setPreview(false);
    } else {
      setFormError(false);
      setPreview(true);
    }
  };

  // console.log("formerror", formError);
  // console.log("preview", preview);

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
            {loading ? (
              <LoadingSpinner />
            ) : (
              <RenderList users={users} selectUser={selectUser} />
            )}
          </ul>
        </div>
      </div>
      <RenderSelectedList
        users={users}
        handleChange={handleChange}
        renderSelectedUsers={renderSelectedUsers}
        sendInvite={sendInvite}
        formError={formError}
        setFormError={setFormError}
      />
      <InvitePreview preview={preview} users={users} />
    </div>
  );
}
