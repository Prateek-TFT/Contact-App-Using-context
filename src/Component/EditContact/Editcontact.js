import React, { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mainContext } from "../Context/mainContext";
import "./EditContact.css";
export const Editcontact = () => {
  const conCtx = useContext(mainContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState(location.state.name);
  const [email, setEmail] = useState(location.state.email);
  const [phone, setPhone] = useState(location.state.phone);
  const onUpdateHandler = () => {
    const updateData = {
      key: location.state.key,
      id: location.state.id,
      name: name,
      email: email,
      phone: phone,
    };
    conCtx.editContact(updateData);
    navigate("/displayPage");
  };
  const onCancelHandler = () => {
    navigate("/displayPage");
  };
  return (
    <div className="add-container">
      <h1>Edit-Contact : {location.state.name}</h1>
      <div className="add-input-container">
        <form>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div>
            <button id="btn-update" onClick={onUpdateHandler}>
              Update Contact
            </button>
            <button id="btn-cancel" onClick={onCancelHandler}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
