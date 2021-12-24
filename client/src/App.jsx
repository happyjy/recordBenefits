import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/page/Home';
import About from './component/page/About';
import NotFound from './component/page/NotFound';
import Layout from './component/base/Layout';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
