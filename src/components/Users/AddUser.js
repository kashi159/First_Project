import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [error, setError] = useState();
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        msg: 'Please enter a valid username and age.'
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid Age',
        msg: 'Please enter a valid age (> 0).'
      });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      username: userName,
      age: age,
    };
    setUserName("");
    setAge("");
    props.onSaveNewUser(userData);
  };

  const errorHandler =() =>{
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} msg={error.msg} onError={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={usernameChangeHandler}
          ></input>

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
