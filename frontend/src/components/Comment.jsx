import React from "react";

import userthumb from "../assets/userthumb.png";

export default function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <img className="user-thumb" src={userthumb} />
        <p>
          {" "}
          <em>Jhon Doe</em> commented :
        </p>
      </div>

      <div className="comment-body">
        <p>" {comment.body} "</p>
        <button className="btn btn-danger" onClick="">
          Delete Comment
        </button>
      </div>

      <p className="comment-footer">
        <hr />
      </p>
    </div>
  );
}
