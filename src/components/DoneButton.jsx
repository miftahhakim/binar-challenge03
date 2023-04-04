import React from "react";
import { Button } from "react-bootstrap";
// import DeleteDoneBtn from "./DeleteDoneBtn";

function DoneButton({ clickedDone }) {
  return (
    <div className="d-grid gap-2">
      <Button
        onClick={clickedDone}
        variant="primary"
        style={{ width: "25rem", height: "3rem" }}
      >
        Done
      </Button>
    </div>
  );
}

export default DoneButton;
