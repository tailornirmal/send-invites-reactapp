import React from "react";
import "./InvitePreview.css";

export default function InvitePreview({ preview, users }) {
  console.log("props in preivew", preview);
  if (!preview) {
    return false;
  }
  const { from } = users;
  return (
    <div>
      <div className="modal-wrapper">
        <div class="container text-left">
          <div class="row">
            <div class="col">Invites for meeting</div>
          </div>
          <div class="row">
            <div class="col">{from}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
