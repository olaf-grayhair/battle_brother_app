import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/compare" element={<BookList />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
