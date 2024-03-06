
import './App.css';
import { useState, useEffect} from 'react';


export const App = () => {
  const [datetime, setDatetime] = useState("2020-11-13T22:46");

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Prague');
      const data = await response.json();
      setDatetime(data.datetime);
    };
    loadData();
  }, [datetime]);

  return (
    <div>
      <strong>ČAS & DATUM: </strong> <output>{datetime}</output>
      <br />
      <br />
    </div>
  );
};

export default App;
