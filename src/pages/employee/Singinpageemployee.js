import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Link, Routes, Route }  from 'react-router-dom';
import Sidenavmenubar from '../navigationbar/Sidenavigationbar';

function Signinpageemployee({signOut}) {
  return (
      <div>
          <Sidenavmenubar/>
          hey  BrowserRouter
          <button onClick={signOut}>Sign out</button>
          
    </div>
  );
}

export default withAuthenticator(Signinpageemployee)