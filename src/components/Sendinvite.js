import React from "react";
export default function Sendinvite() {
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
            placeholder="meeting.tailorsthought@ymail.com"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="input-group input-group-sm mb-3 flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Subject
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Meeting Purpose"
            aria-label="figma"
            aria-describedby="addon-wrapping"
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
            value={1}
          >
            <option defaultValue={1} selected>
              Select from Available room
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
          <button type="button" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
