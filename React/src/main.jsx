import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/styles.css'
import Login from './components/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import UserDashbord from './components/UserDashbord.jsx';
import Users from './components/Users.jsx';
import Events from './components/Events.jsx';
import Addevent from './components/Addevent.jsx';
import Eventlist from './components/Eventlist.jsx';
import Footer from './components/Footer.jsx';
import UserSingup from './components/UserSingup.jsx';
import UserLogin from './components/UserLogin.jsx';
import LoginUserPage from './components/LoginUserPage.jsx';
import UserCard from './components/UserCard.jsx';
import Booked from './components/Booked.jsx';
import NotFound from './components/NotFound.jsx';




createRoot(document.getElementById('root')).render(

  <StrictMode>


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserDashbord />} />
        <Route path='/usersignup' element={<UserSingup />} />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/adminlogin' element={<Login />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/event' element={<Eventlist />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/Addevent' element={<Addevent />} />
        <Route path='/admin/events' element={<Events />} />
        <Route path='/admin/booked' element={<Booked />} />
        <Route path='/userdashboard' element={<LoginUserPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>


  </StrictMode>
);
