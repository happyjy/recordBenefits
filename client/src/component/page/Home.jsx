import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [things, setThings] = useState([]);
  const [dbData, setDBData] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        console.log('### getUsers', res);
        setUsers(res?.result);
      })
      .catch((err) => console.log(err));

    getThings()
      .then((res) => {
        console.log('### getThings', res);
        setThings(res?.result);
      })
      .catch((err) => console.log(err));

    getApiTest()
      .then((res) => {
        console.log('### getApiTest', res);
        setDBData(res?.result);
      })
      .catch((err) => console.log(err));
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  const getThings = async () => {
    try {
      const response = await fetch('/api/things/getAll');
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    } catch (error) {
      console.error(error);
    }
  };
  const getApiTest = async () => {
    try {
      const response = await fetch('/api/test');
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to='/about'>About</Link>

        <div>
          call api test - users
          {users?.map((v) => {
            return <div key={v.index}>{v.name}</div>;
          })}
        </div>
        <div>
          call api test - things
          {things?.map((v) => {
            return <div key={v.index}>{v.name}</div>;
          })}
        </div>
        <div>
          call api test From DB
          {dbData?.map((v) => {
            return <div key={v.user_id}>{v.nickname}</div>;
          })}
        </div>
      </nav>
    </>
  );
};
export default Home;
