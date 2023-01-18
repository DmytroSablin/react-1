import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-route">
          <Routes>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/dialogs' element={<Dialogs />}></Route>
            <Route path='/news' element={<News />}></Route>
            <Route path='/music' element={<Music />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
