import { React, useState } from 'react';
import Home from "./pages/Home/Home";
import Heroes from "./pages/Heroes/Heroes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Background from "./components/background/Background";
import style from './app.module.scss'
import bg1 from './assets/images/bg1.png'

function App() {
  const [bg, setBg] = useState('');

  const bgStorage = localStorage.getItem('background')

  console.log(bgStorage === null, 'bgstore');
  return (
    <BrowserRouter>
      <div className={style.main}
        style={{ backgroundImage: bgStorage === null 
          ? `url(${bg1})` 
          : `url(${bgStorage})` }}
      >
        <Navbar />
        <Background setBg={setBg} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<Heroes />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
