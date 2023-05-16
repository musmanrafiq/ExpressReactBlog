import logo from './logo.svg';
import './App.css';
import Footer from './Layout/footer';
import SideMenu from './Layout/sideMenu';
import Home from './components/home';
import Header from './Layout/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './Layout/default-layout';
import About from './components/about';

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
