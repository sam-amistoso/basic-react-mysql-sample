import React from 'react';

const User = ({ data }) => {
  const { User_ID, FirstName, LastName, Location, Status } = data;

  return (
    <div className="flex flex-col rounded-sm border border-black p-4">
      <h2>User ID: {User_ID}</h2>
      <h2>First Name: {FirstName}</h2>
      <h2>Last Name: {LastName}</h2>
      <h2>Location: {Location}</h2>
      <h2>Status: {Status}</h2>
    </div>
  );
};

export default User;
