import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import User from './User';

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUserList = async () => {
      console.log('Execute Get User List');
      let response = await Axios.get('/api/userlist');

      // console.log(response);
      if (response) {
        let data = response.data;
        if (Array.isArray(data)) {
          // console.log(data);
          setData(data);
        }
      }
    };

    getUserList();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <p>User List Here</p>
      {data &&
        data.map((user, index) => (
          <div key={index} className="p-2">
            <User data={user} />
          </div>
        ))}
    </div>
  );
};

export default Users;
