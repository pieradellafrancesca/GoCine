import { useEffect, useReducer } from "react";
import { Context } from "./context";
import { initialState } from "./context/state";
import { mainReducer } from "./context/reducers";
import { Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Preorder from "./pages/Preorder";
import Tickets from "./pages/Tickets";
import Layouts from "./layouts";

// ===== // ===== //
// Permission to the protected route - Filippo
// gets the value of the data 'isLogged' from localStorage,
// it's a check so the user can be redirected directly to the protected route without passing the control
const currentValue = JSON.parse(localStorage.getItem("isLogged"));

// ===== // ===== //

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <div className="App">

      <Context.Provider value={{ state, dispatch }}>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<Home />} />
            <Route path="movie/:info" element={<Info />} />
            <Route
              path="movie/:info/preorder"
              element={
                currentValue ? (
                  <Preorder />
                ) : (
                  <ProtectedRoute>
                    <Preorder />
                  </ProtectedRoute>
                )
              }
            />
            <Route path="search" element={<Search />} />
            <Route path="tickets" element={<Tickets />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Context.Provider>

    </div>
  );
}

export default App;
