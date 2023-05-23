import logo from './logo.svg';
import './App.css';
import Footer from './Layout/footer';
import SideMenu from './Layout/sideMenu';
import Home from './components/home';
import Header from './Layout/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './Layout/default-layout';
import About from './components/about';
import PostDetail from './components/postDetail';
import AdminLayout from './Layout/adminLayout';
import Login from './components/login';
import AuthLayout from './Layout/authLayout';
import Dashboard from './components/admin/dashboard';
import AddPost from './components/admin/addpost';

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/post/:id' element={<PostDetail />} />
          </Route>

          <Route path='/auth' element={<AuthLayout />}>
            <Route index element={<Login />} />
          </Route>

          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='/admin/post/add' element={<AddPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
