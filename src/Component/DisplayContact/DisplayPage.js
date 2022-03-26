import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Contact } from "../Contacts/Contact";
import { mainContext } from "../Context/mainContext";
import "./DisplayPage.css";
export const DisplayPage = () => {
  const conCtx = useContext(mainContext);
  const navigate = useNavigate();
  const onDeleteHandler = (key) => {
    conCtx.removeContact(key);
  };
  const onEditHandler = (data) => {
    navigate("/editcontact", { state: data });
  };
  return (
    <div className="display-container">
      <div className="showDetails">
        <header>
          <p id="Id">Id</p>
          <p id="Name">Name</p>
          <p id="Email">Email</p>
          <p id="Phone">Phone</p>
        </header>
        <div className="content-div">
          {conCtx.contacts.length == 0 ? (
            <p>No contacts found....</p>
          ) : (
            conCtx.contacts.map((data) => {
              return (
                <Contact
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  email={data.email}
                  phone={data.phone}
                  onDelete={() => onDeleteHandler(data.key)}
                  onEdit={() => onEditHandler(data)}
                />
              );
            })
          )}

          <ClipLoader color={"blue"} loading={conCtx.showSpinner} size={30} />
        </div>
      </div>
    </div>
  );
};
