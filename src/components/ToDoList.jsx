import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import datas from "../data/data.json";
import AllBtn from "./AllButton";
import DeleteAllBtn from "./DeleteAllButton";
import DeleteBtn from "./DeleteButton";
import DeleteDoneBtn from "./DeleteDoneBtn";
import DoneBtn from "./DoneButton";
import EditBtn from "./EditBtn";
import ToDoBtn from "./ToDoBtn";
import CheckBtn from "./CheckButton";

function TodoList({ search }) {
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    setTodos(datas);
  }, []);

  const sortAll = () => {
    setType("");
  };

  const sortDone = () => {
    setType("sortDone");
  };

  const sortTodo = () => {
    setType("sortTodo");
  };

  const deleteDoneTask = () => {
    const donetask = todos.filter((todo) => !todo.complete);
    setTodos(donetask);
  };

  const deleteAllTask = () => {
    setTodos([]);
  };

  const updateList = (type, id) => {
    if (type === "done") {
      let check = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
      setTodos(check);
    }
    if (type === "delete") {
      let del = todos.filter((todo) => todo.id !== id);
      setTodos(del);
    }
  };

  return (
    <>
      <h1 className="text-center">TodoList</h1>
      <Container>
        <Row className="mt-4">
          <Col md={4} className="d-flex justify-content-center">
            <AllBtn
              clickedAll={() => {
                sortAll();
              }}
            />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <DoneBtn
              clickedDone={() => {
                sortDone();
              }}
            />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <ToDoBtn
              clickedTodo={() => {
                sortTodo();
              }}
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 ">
        <Row className="mx-auto">
          <Col>
            {todos &&
              type === "sortTodo" &&
              !search &&
              todos
                .filter((todo) => todo.complete === false)
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="square border rounded my-3 p-2">
                        <Row>
                          <Col>{data.task}</Col>
                          <Col className="d-flex justify-content-end">
                            <Stack direction="horizontal" gap={3}>
                              <CheckBtn />
                              <EditBtn />
                              <DeleteBtn
                                onclick={() => updateList("delete", data.id)}
                              />
                            </Stack>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
                })}
            {todos &&
              type === "" &&
              !search &&
              todos.map((data) => {
                return (
                  <div key={data.id}>
                    <Container className="square border rounded my-3 p-2">
                      <Row>
                        <Col>
                          <p className={data.complete ? "complete" : null}>
                            {data.task}
                          </p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <Stack direction="horizontal" gap={3}>
                            <CheckBtn
                              onclick={() => updateList("done", data.id)}
                            />
                            <EditBtn />
                            <DeleteBtn
                              onclick={() => updateList("delete", data.id)}
                            />
                          </Stack>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                );
              })}
            {todos &&
              type === "sortDone" &&
              !search &&
              todos
                .filter((todo) => todo.complete === true)
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="square border rounded my-3 p-2">
                        <Row>
                          <Col>{data.task}</Col>
                          <Col className="d-flex justify-content-end">
                            <Stack direction="horizontal" gap={3}>
                              <CheckBtn />
                              <EditBtn />
                              <DeleteBtn
                                onclick={() => updateList("delete", data.id)}
                              />
                            </Stack>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
                })}
            {todos &&
              search &&
              todos
                .filter((todo) =>
                  todo.task.toLowerCase().includes(search.toLowerCase())
                )
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="square border rounded my-3 p-2">
                        <Row>
                          <Col>{data.task}</Col>
                          <Col className="d-flex justify-content-end">
                            <Stack direction="horizontal" gap={3}>
                              <CheckBtn />
                              <EditBtn />
                              <DeleteBtn
                                onclick={() => updateList("delete", data.id)}
                              />
                            </Stack>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
                })}
          </Col>
        </Row>
      </Container>
      <div>
        <Container className="mt-4 pb-5 d-flex justify-content-center">
          <Row>
            <Col>
              <DeleteDoneBtn
                clickedDeleteDone={() => {
                  deleteDoneTask();
                }}
              />
            </Col>
            <Col>
              <DeleteAllBtn
                clickedDeleteAll={() => {
                  deleteAllTask();
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TodoList;
