import React from "react";

export default function RenderList({ users, selectUser }) {
  console.log("in render", users);
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
                selectedUser.filter((e) => e.id === dataObject.id).length > 0 &&
                true
              }
            />
          </span>
        </li>
      );
    });
    return data.length ? data : [];
  }
}
