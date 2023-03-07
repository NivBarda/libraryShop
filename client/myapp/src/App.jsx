import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
