import React from "react";

const ViewContact = ({ contact, onClose }) => {
  return (
    <div className="flex flex-col gap-5 w-auto my-5">
      <h3 className=" text-gray-500 font-bold">Contact Details</h3>
      <p className="font-bold"><strong className=" text-gray-400">Name:</strong> {contact.name}</p>
      <p className="font-bold"><strong className=" text-gray-400">Email:</strong> {contact.email}</p>
      <p className="font-bold"><strong className=" text-gray-400">Mobile:</strong> {contact.mobile}</p>
      <p className="font-bold"><strong className=" text-gray-400">Address:</strong> {contact.address === '' || contact.address === undefined ? <span>No Address Data here</span> : contact.address}</p>
      <button className="rounded-md h-10 w-24 cursor-pointer hover:bg-orange-600 bg-orange-700 text-white" onClick={onClose}>Close</button>
    </div>
  );
};

export default ViewContact;
