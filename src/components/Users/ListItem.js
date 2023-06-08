import React from "react";

const ListItem = (props) => {
  // console.log(props);
  return (
    <li>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default ListItem;
