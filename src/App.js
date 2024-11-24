import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import AddEditContact from "./components/AddEditContact";
import ViewContact from "./components/ViewContact";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isViewing, setIsViewing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Fetch initial data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        setFilteredContacts(data);
      });
  }, []);

  // Add a new contact
  const handleAddContact = (newContact) => {
    const id = contacts.length + 1;
    const updatedContacts = [...contacts, { ...newContact, id }];
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
    setIsAdding(false);
  };

  // Edit a contact
  const handleEditContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
    setIsEditing(false);
  };

  // Delete a contact
  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  };

  // View contact details
  const handleViewContact = (contact) => {
    setSelectedContact(contact);
    setIsViewing(true);
  };

  // Search contacts
  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const result = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(lowerQuery) ||
        contact.mobile.includes(query)
    );
    setFilteredContacts(result);
  };

  return (
    <div className="font-sans p-3 flex flex-col md:flex-row gap-4">
      {/* Left Section: All Contacts */}
      <div
        className={`w-full md:w-1/2 border rounded-md bg-black p-5 h-dvh ${
          (isViewing || isEditing || isAdding) && "hidden md:block opacity-50 pointer-events-none"
        }`}
      >
        <div className="flex justify-center rounded-md items-center gap-5 bg-blue-500 mb-5 h-20">
          <h1 className="text-center font-bold text-white">All Contacts</h1>
          <button
            className="bg-blue-900 text-white px-4 py-2 font-bold rounded-full ms-10 hover:bg-blue-700 cursor-pointer"
            onClick={() => setIsAdding(true)}
          >
            +
          </button>
        </div>
        <SearchBar onSearch={handleSearch} />
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
          onEdit={(contact) => {
            setSelectedContact(contact);
            setIsEditing(true);
          }}
          onView={handleViewContact}
        />
      </div>
  
      {/* Right Section: Contact Details */}
      {(isViewing || isEditing || isAdding) && (
        <div className="w-full md:w-1/2 border rounded-md bg-gray-100 p-5 h-dvh">
          {isViewing && (
            <ViewContact
              contact={selectedContact}
              onClose={() => setIsViewing(false)}
            />
          )}
          {isEditing && (
            <AddEditContact
              contact={selectedContact}
              onSave={handleEditContact}
              onClose={() => setIsEditing(false)}
            />
          )}
          {isAdding && (
            <AddEditContact
              onSave={handleAddContact}
              onClose={() => setIsAdding(false)}
            />
          )}
        </div>
      )}
    </div>
  );
  
  
};

export default App;
