import React from 'react'
import { Link } from 'react-router-dom';
import Sidenavmenubar from '../navigationbar/Sidenavigationbar';
import './Pages.css'
function Home() {
    return (
      <div>
      <Sidenavmenubar/>
      <div className='content'>

        <h1>This is the home page</h1>
        <div className="noo"></div>
        <Link to="/manager-sn23" className='searchbutton'>  Manager login </Link> 
        
       
      </div>
      
      </div>
     
    );
  }
  
  export default Home;