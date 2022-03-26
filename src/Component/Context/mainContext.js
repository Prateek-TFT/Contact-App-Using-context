import React, { useState, useEffect } from "react";
export const mainContext = React.createContext({
  contacts: {},
  addContact: () => {},
  editContact: () => {},
  removeContact: () => {},
  showSpinner: false,
});
const MainContextProvider = (props) => {
  const [contacts, setContacts] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const addContact = (contact) => {
    setContacts((prevContact) => {
      return [...prevContact, contact];
    });
    fetch(
      "https://contact-app-da957-default-rtdb.firebaseio.com/Contacts.json",
      {
        method: "Post",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const removeContact = (key) => {
    const Key = key;
    setShowSpinner(true);
    fetch(
      `https://contact-app-da957-default-rtdb.firebaseio.com/Contacts/${Key}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      if (response.ok) {
        setShowSpinner(false);
      }
    });
  };
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch(
        "https://contact-app-da957-default-rtdb.firebaseio.com/Contacts.json"
      );
      const responseData = await response.json();

      const loadedContact = [];

      for (const key in responseData) {
        loadedContact.push({
          key: key,
          id: responseData[key].id,
          name: responseData[key].name,
          email: responseData[key].email,
          phone: responseData[key].phone,
        });
      }
      setContacts(loadedContact);
    };
    fetchContacts();
  }, [showSpinner]);

  const editContact = (data) => {
    const editkey = data.key;
    setShowSpinner(true);
    fetch(
      `https://contact-app-da957-default-rtdb.firebaseio.com/Contacts/${editkey}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
      }
    ).then((response) => {
      if (response.ok) {
        setShowSpinner(false);
      }
    });
  };
  const ctxData = {
    contacts: contacts,
    showSpinner: showSpinner,
    addContact: addContact,
    removeContact: removeContact,
    editContact: editContact,
  };
  return (
    <mainContext.Provider value={ctxData}>
      {props.children}
    </mainContext.Provider>
  );
};
export default MainContextProvider;
