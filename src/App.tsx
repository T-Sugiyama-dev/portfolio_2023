import React from 'react';
import logo from './logo.svg';
import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { TopLayout } from './components/layout/Layout';
import { Top } from './components/top/Top';
import { About } from './components/about/About';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<TopLayout />}>
          <Route index element={<Top />} />
          <Route path={`/about`} element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
  
}

export default App;
