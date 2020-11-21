import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Tasikul islam",
      image:
        "https://pbs.twimg.com/profile_images/1037678868276989958/i9xEAxFX.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
