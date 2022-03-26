import React from "react";
import "./Contact.css";
export const Contact = (props) => {
  const onDeleteHandler = () => {
    props.onDelete();
  };
  const onEditHandler = () => {
    props.onEdit();
  };
  return (
    <div key={props.id} className="items">
      <div id="disp-Id">{props.id}</div>
      <div id="disp-Name">{props.name}</div>
      <div id="disp-Email">{props.email}</div>
      <div id="disp-Phone">{props.phone}</div>
      <button id="edit-button" onClick={onEditHandler}>
        Edit
      </button>
      <button id="delete-button" onClick={onDeleteHandler}>
        Delete
      </button>
    </div>
  );
};
