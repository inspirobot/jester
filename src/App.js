import './App.css';
import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lobby from './components/Lobby'
import Home from "./components/Home";
import Login from "./components/Login";
import NewGame from "./components/NewGame";
import PlayerHand from "./components/Wizard/PlayerHand";
import { initialState, reducer } from "./store/reducer";

export const AuthContext = createContext();

console.log(process.env.REACT_APP_CLIENT_ID);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider      value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login/:provider" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/lobby" element={<Lobby />}/>
          <Route path="/newgame" element={<NewGame />}/>
          <Route path="/game" element={<PlayerHand />}/>
        </Routes>
      </Router> 
    </AuthContext.Provider>
  );
}

export default App;
