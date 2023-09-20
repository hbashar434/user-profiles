import React from "react";

const UserCard = ({ user }) => {
  const { image, name, email } = user || {};
  return (
    <div className="rounded overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white group">
      <img src={image} alt={name} className="w-full h-72 transform transition-transform group-hover:scale-90 group-hover:rounded-md" />
      <div className="px-6 py-2">
        <div className="font-bold text-xl">{name}</div>
        <p className="text-lg">Email : {email}</p>
      </div>
      <div className="px-6 pb-6">
        <button className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transform transition-transform hover:scale-105 shadow-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default UserCard;
