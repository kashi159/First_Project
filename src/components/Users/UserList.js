import React from "react";
import classes from "./UserList.module.css";
import ListItem from "./ListItem";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((user) => (
          <ListItem key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
