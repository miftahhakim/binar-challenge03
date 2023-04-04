import React from "react";
import { Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

function DeleteButton({ onclick }) {
  return (
    <Button variant="danger" size="sm" onClick={onclick}>
      <FaTrashAlt />
    </Button>
  );
}

export default DeleteButton;
