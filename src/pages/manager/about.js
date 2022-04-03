import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import {Outlet, Link} from 'react-router-dom';
//import Sidenavmenubar from '../navigationbar/Sidenavigationbar';
import './Pages.css';
import '../navigationbar/Sidenavmenubar.css'
import Sidenavmenubar1 from './Sidenavigationbar';

function Abour() {
    return (
        <Authenticator>
            {({ signOut, user }) => (
    <div>
        <Sidenavmenubar1/>
        <div className = 'editemp'>
        <div className='mainfont' >
            <h1>Manage Your Employee</h1>
        </div>
        <div className='navbutton'>
                   
            <Link to="manager/employee-edit" className='searchbutton'> All Employee </Link> 
            <Link to="manager/leave-history" className='searchbutton'>leave history</Link> 
            <button onClick={signOut} className="createbutton">Sign out</button>            
        </div>
        <div className='navline'/>
        
        <Outlet/>
        </div>
        
      </div>
            )}
      </Authenticator>
    );
}

export default Abour