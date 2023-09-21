import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const data = useLoaderData();
  const {
    name,
    email,
    image,
    age,
    city,
    country,
    occupation,
    hobbies,
    salary,
    about,
  } = data || {};

  return (
    <div className="bg-white rounded-lg p-16 my-12 md:my-24 ">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="rounded-full h-16 w-16 object-cover mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-500">{email}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold">Personal Info</h3>
          <ul className="text-gray-500">
            <li>
              <strong>Age:</strong> {age}
            </li>
            <li>
              <strong>City:</strong> {city}
            </li>
            <li>
              <strong>Country:</strong> {country}
            </li>
            <li>
              <strong>Occupation:</strong> {occupation}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Additional Info</h3>
          <ul className="text-gray-500">
            <li>
              <strong>Hobbies:</strong> {hobbies.join(", ")}
            </li>
            <li>
              <strong>Salary:</strong> {salary}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">About Me</h3>
        <p className="text-gray-500">{about}</p>
      </div>
    </div>
  );
};

export default UserDetails;
