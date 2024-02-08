import { availableMeetingRooms } from "../Utility/Person.Constants";
export default function RenderSelectedList({
  users,
  handleChange,
  renderSelectedUsers,
  sendInvite,
  formError,
}) {
  console.log("formerrorin", formError);
  return (
    <div className="col-6">
      {formError && (
        <div className="alert alert-danger" role="alert">
          Required fields can't be left blank !!
        </div>
      )}

      <div>
        <div className="input-group input-group-sm mb-3 flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            From *
          </span>
          <input
            type="text"
            name="from"
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            value={users.from}
            onChange={handleChange}
          />
        </div>
        <div className="input-group input-group-sm mb-3 flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Subject *
          </span>
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Meeting Purpose"
            aria-label="figma"
            aria-describedby="addon-wrapping"
            onChange={handleChange}
            value={users.subject}
          />
        </div>
        <div className="input-group input-group-sm mb-3 flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            To *
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="figma"
            aria-describedby="addon-wrapping"
            value={renderSelectedUsers()}
          />
        </div>
        <div className="input-group input-group-sm mb-3 flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Room *
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
            value={users.message}
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={sendInvite}
            disabled={formError}
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
