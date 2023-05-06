import { useEffect, useReducer } from "react";
import { Context } from "./context";
import { initialState } from "./context/state";
import { mainReducer } from "./context/reducers";
import { Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layouts from "./layouts";

import Developers from "./pages/Developers";
import Tickets from "./pages/Tickets";
import Preorder from "./pages/Preorder";


const isLogged = JSON.parse(localStorage.getItem("isLogged"));


function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <div className="App">
      <Context.Provider value={{ state, dispatch }}>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<Home />} />
            <Route path="developers" element={<Developers />} />
            <Route path="tickets" element={<Tickets />} />
            <Route
              path="preorder/:info"
              element={
                isLogged ? (
                  <Preorder />
                ) : (
                  <ProtectedRoute>
                    <Preorder />
                  </ProtectedRoute>
                )
              }
            />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
