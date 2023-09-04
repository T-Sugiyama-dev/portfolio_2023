import React from 'react';
import logo from './logo.svg';
import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { TopLayout } from './components/layout/Layout';
import { Top } from './components/top/Top';
import { About } from './components/about/About';
import { Work } from './components/work/Work';
import { Contact } from './components/contact/Contact';
import { Error404 } from './components/error404/Error404';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<TopLayout />}>
          <Route index element={<Top />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/work`} element={<Work />} />
          <Route path={`/contact`} element={<Contact />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
