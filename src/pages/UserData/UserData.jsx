import React from "react";
import { useFetchUserQuery } from "../../redux/features/userApi";
import UserCard from "../../components/UserCad/UserCad";
import Loading from "../Loading/Loading";

const UserData = () => {
  const { data } = useFetchUserQuery();
  console.log(data);

  return (
    <div className=" container mx-auto py-12 md:py-16">
      <h1 className="text-3xl md:text-6xl font-bold text-purple-600 text-center mb-12">
        Meet Our Client
      </h1>
      {data && Array.isArray(data) && data.length > 0 ? (
        <div className="grid justify-center gap-4 md:grid-cols-3 lg:grid-cols-2 px-4">
          {data.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UserData;
