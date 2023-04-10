import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import style from './App.module.scss';
import './App.scss';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />

        <div className={style.content}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
