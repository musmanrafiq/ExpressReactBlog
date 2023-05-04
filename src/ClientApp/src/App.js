import logo from './logo.svg';
import './App.css';
import Footer from './Layout/footer';
import SideMenu from './Layout/sideMenu';
import Home from './components/home';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row content">

          <SideMenu />
          <Home />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
