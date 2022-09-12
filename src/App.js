
import { Route, Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Sheare/Navbar';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import AddTeam from './Components/Dashboard/AddTeam';
import AddTestimonial from './Components/Dashboard/AddTestimonial';
import AddPortfolio from './Components/Dashboard/AddPortfolio';
import AddService from './Components/Dashboard/AddService';
import AddClient from './Components/Dashboard/AddClient';
import AddChooseUs from './Components/Dashboard/AddChooseUs';
import Packages from './Components/Packages/Packages';
import SingleAboutUs from './Components/SinglePages/SingleAboutUs';
import SinglePortfolio from './Components/SinglePages/SinglePortfolio';
import SingleTeam from './Components/SinglePages/SingleTeam';
import SingleContactUs from './Components/SinglePages/SingleContactUs';
import TermsCondition from './Components/TermsCondition/TermsCondition';
import RequireAuth from './Components/RequiredAuth/RequireAuth';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="">
      <Navbar></Navbar> 
      <Routes >
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<SingleAboutUs></SingleAboutUs>}></Route>
        <Route path='/portfolio' element={<SinglePortfolio></SinglePortfolio>}></Route>
        <Route path='/team' element={<SingleTeam></SingleTeam> }></Route>
        <Route path='/service' element={<Packages></Packages>}></Route>
        <Route path='/terms' element={<TermsCondition></TermsCondition>}></Route>
        <Route path='/contact' element={<SingleContactUs></SingleContactUs>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<AddTeam></AddTeam>}></Route>
          <Route path='testimonial' element={<AddTestimonial></AddTestimonial>}></Route>
          <Route path='portfolio' element={<AddPortfolio></AddPortfolio>}></Route>
          <Route path='service' element={<AddService></AddService>}></Route>
          <Route path='client' element={<AddClient></AddClient>}></Route>
          <Route path='choose-us' element={<AddChooseUs></AddChooseUs>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        {/* <Route path='/signup' element={<Signup></Signup>}></Route> */}
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
