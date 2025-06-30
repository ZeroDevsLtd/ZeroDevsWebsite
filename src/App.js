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
import Team from './Components/Team/Team';
import Career from './Components/Career/Career';
import Apply from './Components/Career/Apply';
import JobDetails from './Components/Career/JobDetails';

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<div className='pt-24 pb-12 px-2'><AboutUs /></div>}></Route>
          {/* <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route> */}
          <Route path='/team' element={<div className='pt-24 pb-12 px-2'><Team /></div>}></Route>
          <Route path='/service' element={<div className='pt-24 pb-12 px-2'><Services /></div>}></Route>
          <Route path='/contact' element={<div className='pt-24 pb-12 px-2'><Contact /></div>}></Route>
          <Route path='/career' element={<div className='pt-24 pb-12 px-2'><Career /></div>}></Route>
          <Route path='/job/:id' element={<div className='pt-24 pb-12 px-2'><JobDetails /></div>}></Route>
          <Route path='/apply/:id' element={<div className='pt-24 pb-12 px-2'><Apply /></div>}></Route>
          <Route path='/dashboard' element={<div className='pt-24 pb-12 px-2'><Dashboard /></div>}>
            <Route index element={<AddTeam />}></Route>
          </Route>
          {/* <Route path='/signup' element={<Signup></Signup>}></Route> */}
          <Route path='/login' element={<div className='pt-24 pb-12 px-2'><Login /></div>}></Route>
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
