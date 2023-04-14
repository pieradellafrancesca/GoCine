import { useEffect, useReducer } from 'react';
import { Context } from './context';
import { initialState } from './context/state';
import { mainReducer } from './context/reducers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import Info from './pages/Info';
import Auth from './pages/Auth';
import Preorder from './pages/Preorder';
import Tickets from './pages/Tickets';

import './App.css';

import { db } from '../firebaseConfig';
import { onValue, ref } from 'firebase/database';

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    const query = ref(db, 'test');
    return onValue(query, (snapShot) => {
      const data = snapShot.val();
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider value={{ state, dispatch }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:info" element={<Info />} />
            <Route path="auth" element={<Auth />} />
            <Route path="preorder" element={<Preorder />} />
            <Route path="tickets" element={<Tickets />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
