import React, { useState } from 'react';
import './App.css'
import ExpenseTracker from './ExpenseTracker';
import Proj2 from './Proj2/Proj2';
import Proj3 from './Proj3/Proj3';
import SwitchingTabs from './SwitchingTabs/SwitchingTabs';
import SideNavBar from './SideNavBar/SideNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile/UserProfile';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <div>
            <SideNavBar />
          </div>
        </div>
        <Routes>
          <Route path='/' element={<UserProfile/>} />
          <Route path='/ExpenseTracker' element={<ExpenseTracker />} />
          <Route path='/Dues' element={<Proj3 />} />
          <Route path='/WishList' element={<Proj2 />} />
          <Route path='/Calculator' element={<SwitchingTabs />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
