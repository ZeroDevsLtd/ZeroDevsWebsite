import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center ">
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to='/dashboard'>Add Team Member</Link></li>
      <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to=''>Add Service</Link></li>
      <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to=''>Add Testimonials</Link></li>
      <li className=' hover:bg-slate-400'><Link className='text-decoration-none' to=''>Users</Link></li>
    </ul>
  
  </div>
</div>

    );
};

export default Dashboard;