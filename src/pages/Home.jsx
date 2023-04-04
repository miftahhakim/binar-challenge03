import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import ToDoList from "../components/ToDoList";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="text-center">
        <h2 className="mt-4">To Do List</h2>
      </div>
      <Container className="square border rounded p-4">
        <Row>
          <Col md={5}>
            <Container>
              <div>
                <span>
                  <Form>
                    <InputGroup className="mb-2">
                      <InputGroup.Text id="basic-addon1">
                        <Search />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </InputGroup>
                  </Form>
                </span>
              </div>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col md={7}>
            <Container>
              <Button
                to="/"
                variant="success"
                className="mt-3"
                style={{ width: "492px" }}
              >
                Search
              </Button>
            </Container>
          </Col>

          <Col md={5}>
            <Button
              variant="success"
              className="mt-3 "
              style={{ width: "20rem" }}
              as={Link}
              to={"/todo-input"}
            >
              Add New Task
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className=" mt-5 square border rounded">
        <div className="mt-3">
          <ToDoList search={search} />
        </div>
      </Container>
    </>
  );
}

export default Home;
