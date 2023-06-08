import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUser] = useState([]);

  const saveUserHandler = (newUser) =>{
    setUser(prevUser =>{
      return [...prevUser, newUser]
    })
  }
  // console.log(users)
  return (
    <div>
      <AddUser onSaveNewUser={saveUserHandler}/>
      <UserList items={users}/>
    </div>
  );
}

export default App;
