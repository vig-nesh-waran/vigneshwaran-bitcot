import React, { useState, useEffect } from "react";


const AddEditContact = ({ contact, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address:'',
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile || !formData.address) {
      alert("All fields are required!");
      return;
    }
    onSave(formData);
    setFormData({ name: "", email: "", mobile: "", address: "" });
    if (onClose) onClose();
  };

  return (
    <form className="my-2 p-4 w-full flex flex-col gap-6 bg-gray-50 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h3 className="text-gray-600 font-bold text-xl mb-2">
        {contact ? "Edit Contact" : "Add Contact"}
      </h3>
      {/* Input Fields */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
      />
      <input
        type="number"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
      />
      
      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-4">
        <button
          className={
            contact
              ? "rounded-md h-10 w-24 cursor-pointer hover:bg-yellow-400 bg-yellow-500 text-white"
              : "rounded-md h-10 w-24 cursor-pointer hover:bg-green-400 bg-green-500 text-white"
          }
          type="submit"
        >
          {contact ? "Update" : "Add"}
        </button>
        {onClose && (
          <button
            className="rounded-md h-10 w-24 cursor-pointer hover:bg-orange-600 bg-orange-700 text-white"
            onClick={onClose}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
  
};

export default AddEditContact;
