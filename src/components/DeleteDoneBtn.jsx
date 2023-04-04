import React from "react";
import { Button } from "react-bootstrap";

function DeleteDoneBtn({ clickedDeleteDone }) {
  return (
    <Button
      onClick={clickedDeleteDone}
      variant="danger"
      style={{ width: "20rem", height: "3rem" }}
    >
      Delete done tasks
    </Button>
  );
}

export default DeleteDoneBtn;
