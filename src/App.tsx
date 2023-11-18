import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import { Top } from './components/top/Top';
import { About } from './components/about/About';
import { Work } from './components/work/Work';
import { Contact } from './components/contact/Contact';
import { Error404 } from './components/error404/Error404';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Layout />}>
          <Route index element={<Top />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/work`} element={<Work />} />
          <Route path={`/contact`} element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
