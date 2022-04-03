import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Link, Routes, Route }  from 'react-router-dom';

function Signinpage() {
  return (
      <div>
          <Link to="/employee-signin/employee">Employee </Link>
          <Link to="/manager-sn23">Manager</Link>
    </div>
  );
}

export default Signinpage