import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUser] = useState([]);

  const saveUserHandler = (newUser) => {
    setUser((prevUser) => {
      return [...prevUser, newUser];
    });
  };
  // console.log(users)
  return (
    <>
      <AddUser onSaveNewUser={saveUserHandler} />
      <UserList items={users} />
    </>
  );
}

export default App;
