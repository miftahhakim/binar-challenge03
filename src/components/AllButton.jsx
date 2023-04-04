import React from "react";
import { Button } from "react-bootstrap";

function AllButton({ clickedAll }) {
  return (
    <div className="d-grid gap-2">
      <Button
        onClick={clickedAll}
        variant="primary"
        style={{ width: "20rem", height: "3rem" }}
      >
        All
      </Button>
    </div>
  );
}

export default AllButton;
