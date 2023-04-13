import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Authentication from "./pages/Authentication";
import Preorder from "./pages/Preorder";
import Tickets from "./pages/Tickets";

import "./App.css";

import { db } from "../firebaseConfig";
import { onValue, ref } from "firebase/database";

function App() {
  useEffect(() => {
    const query = ref(db, "test");
    return onValue(query, (snapShot) => {
      const data = snapShot.val();
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:info" element={<Info />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="preorder" element={<Preorder />} />
          <Route path="tickets" element={<Tickets />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
