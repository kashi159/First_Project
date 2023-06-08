import React from "react";

import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  const clickHandler = () => {
    props.onError();
  };
  return (
    <div>
      <div className={classes.backdrop} onClick={clickHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={clickHandler}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
