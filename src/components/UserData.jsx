import React, { useState } from "react";

function UserData({ users }) {
  let [requestSent, setRequestSent] = useState(false);
  const requestHandler = () => {
    setRequestSent((prev) => !prev);
  };
  return (
    <>
      <div className="w-full">
        <div className="mx-auto mt-10 border border-gray-500  rounded-lg">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center space-x-4 p-4 shadow-sm"
            >
              <img
                src={user.profile_image}
                alt={user.name}
                className="w-30 h-30 mx-8 my-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm text-gray-500 w-full">{user.name}</h3>
                <p className="text-sm text-gray-500 w-full">{user.emp_id}</p>
                <p className="text-sm text-gray-500 w-full">{user.role}</p>
              </div>
              <button
                className="text-xl font-medium w-full"
                onClick={requestHandler}
              >
                {requestSent ? "Request Sent" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserData;
