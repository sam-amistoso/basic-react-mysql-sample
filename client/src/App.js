import React from 'react';
import Axios from 'axios';
import Users from './components/Users';

Axios.defaults.baseURL = process.env.REACT_APP_APIBASEURL;

function App() {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <h1 className="text-2xl font-semibold">Welcome To</h1>
      <h1 className="text-2xl font-semibold">Basic React with MySQL</h1>
      <Users />
    </div>
  );
}

export default App;
