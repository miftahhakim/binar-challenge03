import React from "react";
import { Button } from "react-bootstrap";

function DeleteAllButton({ clickedDeleteAll }) {
  return (
    <Button
      onClick={clickedDeleteAll}
      variant="danger"
      style={{ width: "20rem", height: "3rem" }}
    >
      Delete All Tasks
    </Button>
  );
}

export default DeleteAllButton;
