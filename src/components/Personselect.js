import "./Personselect.css";

export default function Personselect() {
  return (
    <div className="row" style={{ padding: "10px" }}>
      <div className="col-12">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-header">Select Person to Invite</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Rick Martin
              <span className="person-select-check">
                <input
                  class="form-check-input mt-1"
                  type="checkbox"
                  value="Person 1"
                  aria-label="Checkbox for following text input"
                  title="Select Rick Martin"
                />
              </span>
            </li>
            <li class="list-group-item">Abish Matthew</li>
            <li class="list-group-item">Tim Bernett</li>
            <li class="list-group-item">Abish Matthew</li>
            <li class="list-group-item">Tim Bernett</li>
            <li class="list-group-item">Abish Matthew</li>
            <li class="list-group-item">Tim Bernett</li>
            <li class="list-group-item">Abish Matthew</li>
            <li class="list-group-item">Tim Bernett</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
