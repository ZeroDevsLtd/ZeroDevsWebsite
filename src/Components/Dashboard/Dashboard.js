import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const logout = () => {
    signOut(auth);
    toast(`Successfully logout`);
  };
  return (
    <div class="drawer drawer-mobile mt-10">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>

      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to='/dashboard'>Add Team Member</Link></li>
          <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to='/dashboard/service'>Add Service</Link></li>
          <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to='/dashboard/testimonial'>Add Testimonials</Link></li>
          <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to='/dashboard/portfolio'>Add Portfolio</Link></li>
          <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to='/dashboard/client'>Add Client</Link></li>
          <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to='/dashboard/choose-us'>Add Choose Us</Link></li>
          <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to='/dashboard/circular'>Add Circular</Link></li>
          <li className=' hover:bg-slate-400'><Link onClick={logout} className='text-decoration-none' to=''>Logout</Link></li>
        </ul>

      </div>
    </div>

  );
};

export default Dashboard;