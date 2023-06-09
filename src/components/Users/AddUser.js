import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [error, setError] = useState();
  // const [userName, setUserName] = useState("");
  // const [age, setAge] = useState("");

  // const usernameChangeHandler = (event) => {
  //   setUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollegeName = collegeInputRef.current.value;

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        msg: "Please enter a valid username and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        msg: "Please enter a valid age (> 0).",
      });
      return;
    }
    if(enteredCollegeName.trim().length === 0){
      setError({
        title: "Invalid Input",
        msg: "Please enter the college name"
      });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      username: enteredUserName,
      age: enteredAge,
      college: enteredCollegeName,
    };

    // setUserName("");
    // setAge("");
    props.onSaveNewUser(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
            // value={userName}
            // onChange={usernameChangeHandler}
          ></input>

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
            // value={age}
            // onChange={ageChangeHandler}
          ></input>

          <label htmlFor="college-name">College Name</label>
          <input id="college-name" type="text" ref={collegeInputRef}></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
