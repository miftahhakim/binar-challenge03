import React from "react";
import { Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";

function EditBtn() {
  return (
    <Button variant="success" size="lg">
      <FaPencilAlt />
    </Button>
  );
}

export default EditBtn;
