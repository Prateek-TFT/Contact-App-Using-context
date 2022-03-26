import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { mainContext } from "../Context/mainContext";
import "./AddContact.css";
export const AddContact = () => {
  const conCtx = useContext(mainContext);
  const navigate = useNavigate();
  const NameRef = useRef();
  const EmailRef = useRef();
  const PhoneRef = useRef();

  const onAddUserHandler = (event) => {
    let newid = 0;
    if (conCtx.contacts.length === 0) {
      newid = 1;
    } else {
      let lastElement = conCtx.contacts[conCtx.contacts.length - 1];
      newid = lastElement.id + 1;
    }

    event.preventDefault();
    const contact = {
      id: newid,
      name: NameRef.current.value,
      email: EmailRef.current.value,
      phone: PhoneRef.current.value,
    };
    conCtx.addContact(contact);
    navigate("/displayPage");
  };
  const onShowContactHandler = () => {
    navigate("/displayPage");
  };
  return (
    <div className="add-container">
      <div className="add-container-top">
        <h1>Add-Contact</h1>
        <button onClick={onShowContactHandler}>Show-Contacts</button>
      </div>
      <div className="add-input-container">
        <form>
          <label>Name</label>
          <input type="text" ref={NameRef} />
          <label>Email</label>
          <input type="text" ref={EmailRef} />
          <label>Phone</label>
          <input type="text" ref={PhoneRef} />
          <button onClick={onAddUserHandler}>Add-Use</button>
        </form>
      </div>
    </div>
  );
};
