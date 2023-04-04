import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/todo-input" exact element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
