import React from "react";

const ContactList = ({ contacts, onDelete, onEdit, onView }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {contacts.map((contact, index) => (
        <div
          key={contact.id}
          className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <span className="text-4xl mb-2">👤</span>
          <span className="font-bold text-lg">{contact.name}</span>
          <span className="text-gray-700">{contact.mobile}</span>
          <div className="mt-4 flex gap-3">
            <button
              className="text-blue-500"
              onClick={() => onView(contact)}
            >
              👁 View
            </button>
            <button
              className="text-green-500"
              onClick={() => onEdit(contact)}
            >
              ✏ Edit
            </button>
            <button
              className="text-red-500"
              onClick={() => onDelete(contact.id)}
            >
              🗑 Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
