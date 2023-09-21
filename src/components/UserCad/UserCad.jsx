import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { image, name, email, _id } = user || {};
  return (
    <div className="rounded overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white group lg:flex gap-2 items-center">
      <img
        src={image}
        alt={name}
        className="w-full lg:w-72 h-72 transform transition-transform group-hover:scale-90 group-hover:rounded-md"
      />
      <div className="px-6 py-2">
        <div className="font-bold text-xl">{name}</div>
        <p className=" text-base">Email : {email}</p>
        <Link to={`/userDetails/${_id}`}>
          <div className="pt-3 pb-6">
            <button className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transform transition-transform hover:scale-105 shadow-md">
              More Info
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
