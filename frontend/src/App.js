import { Routes, Route } from 'react-router-dom';
import {Home} from './components/home/Home';
import {Login} from './components/Login/Login';
import './App.css';

import { AuthUser,AuthAdmin } from "./components/auth";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      
      <Route path="login" element={<Login/>}/>
      <Route element={<AuthUser/>}>
        
      </Route>
      <Route element={<AuthAdmin/>}>
        
      </Route>
      
    </Routes>
  );
}

export default App;
