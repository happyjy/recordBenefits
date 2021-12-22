import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    callBackendAPI()
      .then((res) => {
        console.log({ res });
        setState(res.express);
      })
      .catch((err) => console.log(err));
  }, []);

  const callBackendAPI = async () => {
    try {
      const response = await fetch('/users');
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
    <div className='App'>
      <header className='App-header'>
        call api
        {state.map((v) => {
          return <label key={v.index}>{v.name}</label>;
        })}
      </header>
    </div>
  );
}

export default App;
