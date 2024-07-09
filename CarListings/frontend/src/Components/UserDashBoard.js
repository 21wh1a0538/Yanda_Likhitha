//UserDashBoard.js


import React from 'react';
import UserNavBar from './UserNavBar';
import Search from './Search';

const UserDashBoard = () => {
  return (
    <div>
      <UserNavBar />
      <br/><br/>
      <div className="user-board mt-4">
        <h1>Welcome to the User Dashboard</h1>
        <Search/>
      </div>
    </div>
  );
};

export default UserDashBoard;
