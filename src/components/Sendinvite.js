import React, { useReducer } from "react";
import InvitessReducer from "../Reducers/InviteesReducer";
import personReducer from "../Reducers/personReducer";

const initialState = {
  from: "meeting.tailorsthought@ymail.com",
  subject: "",
  to: "",
  time: "",
  room: "",
  message: "",
};

const availableMeetingRooms = [
  {
    id: 0,
    name: "No Room",
  },
  {
    id: 1,
    name: "Elon",
  },
  {
    id: 2,
    name: "Juck",
  },
  {
    id: 3,
    name: "Tesla",
  },
  {
    id: 4,
    name: "SpaceX",
  },
  {
    id: 5,
    name: "Twitter",
  },
];

export default function Sendinvite() {
  const [invites, dispatch] = useReducer(InvitessReducer, initialState);
  // const [users, dispatch] = useReducer(personReducer, {});

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    const { name, value } = e.target;

    dispatch({
      type: "UPDATE_FORM_FIELD",
      payload: { name: name, value: value },
    });
  };

  console.log("invites", invites);
  console.log("users", personReducer);

  return (
    <div className="row">
      <div className="col-8">
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
            value={invites.from}
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
          />
        </div>
        <div className="input-group input-group-sm mb-3 flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Time
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="04:15 PM"
            aria-label="figma"
            aria-describedby="addon-wrapping"
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
          ></textarea>
        </div>
        <div>
          <button type="button" className="btn btn-primary" disabled>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
