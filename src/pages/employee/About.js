import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Sidenavmenubar from '../navigationbar/Sidenavigationbar';
import './Pages.css';
import '../navigationbar/Sidenavmenubar.css'

function About() {
    return (
    <div>
        <Sidenavmenubar/>
        <div className = 'editemp'>
        <div className='mainfont' >
            <h1>Manage Your Employee</h1>
        </div>
        <div className='navbutton'>
                   
            <Link to="/employee-signin/employee/empedit" className='searchbutton'> All Employee </Link> 
            <Link to="/employee-signin/employee/request-leave" className='searchbutton'>request leave</Link>
            <Link to="/employee-signin/employee/leave-history" className='searchbutton'>leave history</Link>       
            <Link  to="/employee-signin/employee/create-employee" className='createbutton' > Join now </Link>
             

            
        
        </div>
        <div className='navline'/>
        
        <Outlet/>
        </div>
        
      </div>
      
    );
}

export default About