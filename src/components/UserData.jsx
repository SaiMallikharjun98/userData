import React, { useState } from "react";

function UserData({ users }) {
  let [requestSent, setRequestSent] = useState(false);
  const requestHandler = (userId) => {
    setRequestSent((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };
  return (
    <>
      <div className="w-full ">
        <div className="max-w-2xl mx-auto mt-20 ">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-2 p-0.5  rounded-lg border mb-4 "
            >
              <img
                src={user.profile_image}
                alt={user.name}
                className="w-30 h-30 mx-8 my-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm text-gray-500 whitespace-nowrap">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-500 w-full">{user.emp_id}</p>
                <p className="text-sm text-gray-500 whitespace-nowrap">
                  {user.role}
                </p>
              </div>
              <button
                className="text-xl font-medium w-full"
                onClick={() => requestHandler(user.id)}
              >
                {requestSent[user.id] ? "Request Sent" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserData;
