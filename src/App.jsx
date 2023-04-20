import { useEffect, useReducer } from "react";
import { Context } from "./context";
import { initialState } from "./context/state";
import { mainReducer } from "./context/reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";

import Error from "./pages/Error";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Auth from "./pages/Auth";
import Preorder from "./pages/Preorder";
import Layouts from "./layouts";

import { db } from "../firebaseConfig";
import { onValue, ref } from "firebase/database";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    const query = ref(db, "test");
    return onValue(query, (snapShot) => {
      const data = snapShot.val();
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      {/* <UserAuthContextProvider> */}
      <BrowserRouter>
        <Context.Provider value={{ state, dispatch }}>
          <Routes>
            <Route element={<Layouts />}>
              <Route path="/" element={<Home />} />
              <Route path="movie/:info" element={<Info />} />
              <Route
                path="movie/:id/preorder"
                element={
                  // <ProtectedRoute>
                  <Preorder />
                  // </ProtectedRoute>
                }
              />
            </Route>

            <Route path="auth" element={<Auth />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
      {/* </UserAuthContextProvider> */}
    </div>
  );
}

export default App;
