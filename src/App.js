import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route }  from 'react-router-dom';
import About from './pages/employee/About';
import Abour from './pages/manager/about';
import Empeditmanager from './pages/manager/empedit';
import Leavehistorymanager from './pages/manager/leavehistory';

import Careers from './pages/employee/careerpage';
import Singinpageemployee from './pages/employee/Singinpageemployee';
import Empeditttt from './pages/employee/empedit';
import Createemp from './pages/employee/Createemp';
import Leaveform from './pages/employee/leaveform';
import Leavehistory from './pages/employee/leavehistory';
import Signinpage from './pages/Signinpage';
import Home from './pages/employee/homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home/>} />
        
        <Route path="employee-signin/employee" element={<About/>} >
          <Route index element={<Empeditttt/>}/>
          <Route path="empedit" element={<Empeditttt/>}/>
          <Route path="create-employee" element={<Createemp/>}/>
          <Route path="request-leave" element={<Leaveform/>}/>
          <Route path="leave-history" element={<Leavehistory/>}/>
          <Route element={<Empeditttt/>}/>
        </Route>
        <Route path="/careers" element={<Careers/>}/>

        <Route path="manager-sn23" element={<Abour/>}>

        <Route path="manager/employee-edit" element={<Empeditmanager/>}/>
        <Route index element={<Empeditmanager/>}/>
        <Route path="manager/leave-history" element={<Leavehistorymanager/>}/>
        <Route element={<Empeditmanager/>}/>
        </Route>
        
        <Route element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
