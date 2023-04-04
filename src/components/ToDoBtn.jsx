import React from "react";
import { Button } from "react-bootstrap";

function ToDoBtn({ clickedTodo }) {
  return (
    <div className="d-grid gap-2">
      <Button
        onClick={clickedTodo}
        variant="primary"
        style={{ width: "20rem", height: "3rem" }}
      >
        ToDo
      </Button>
    </div>
  );
}

export default ToDoBtn;
