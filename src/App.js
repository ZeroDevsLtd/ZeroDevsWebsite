import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Sheare/Navbar';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import AddTeam from './Components/Dashboard/AddTeam';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/Home/AboutUs';
import Portfolio from './Components/Portfolio/Portfolio';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<AddTeam></AddTeam>}></Route>
        </Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
