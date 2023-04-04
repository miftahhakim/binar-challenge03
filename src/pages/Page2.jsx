import React, { useState } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import InputGroup from "react-bootstrap/InputGroup";
import data from "../data/data.json";

function Page2() {
  const navigate = useNavigate();

  const [task, setTask] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const taskLength = data.length;
    data.push({
      id: taskLength + 1,
      task,
    });

    return navigate("/");
  };

  return (
    <>
      <div className="text-center">
        <h1>TodoInput</h1>
      </div>
      <Container className="square border rounded p-4">
        <Row>
          <Col>
            <Form onSubmit={onSubmit} className="">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" className="bg-primary">
                  <MDBIcon fas icon="quran" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Input/Edit Todo"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="mb-2"
                />
              </InputGroup>

              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Page2;
