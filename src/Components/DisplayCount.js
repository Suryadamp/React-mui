import React from "react";
import Button from "./Button";

const DisplayCount = (props) => {
    console.log(props)
  return (
    <div>
        <h1>Returns BatMan</h1>
      <h1>{props.count}</h1>
      <Button />
      <h1>name</h1>
    </div>
  );
};

export default DisplayCount;
