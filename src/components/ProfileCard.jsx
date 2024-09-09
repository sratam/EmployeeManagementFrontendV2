import React from "react";

function ProfileCard({ name, photoUrl, email }) {
  return (
    <div className="flex items-center p-4">
      {/* User Photo */}
      <div className="w-12 h-12 flex-shrink-0">
        <img
          src={photoUrl}
          alt={`${name}'s Photo`}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* User Details */}
      <div className="ml-4">
        {/* User Name */}
        <div className="text-md font-semibold ">{name}</div>
        {/* User Email */}
        <div className="text-sm">{email}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
