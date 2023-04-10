import './App.css';
import Moto from './components/Moto'
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserCount from './components/UserCount';
import PickOneDelAll from './components/PickOneDelAll';
import Navbar from './components/Navbar';
import Topmenu from './components/Topmenu';
import Terms from './components/Terms';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [winner, setWinner] = useState("");
  const [usercount, setUsercount] = useState(0);
  const [query, setQuery] = useState("")

  async function getWinner() {
    let response = await axios.delete(
      "https://gift-app-shxz.onrender.com/user/pickonedelall"
    );
    if (response.data) {
      setWinner(`This week's winner is:\n${response.data.name}`);
      setUsercount(0);
    } else {
      alert("Sadly, no participants yet :(");
    }
  }

  async function getUserCount() {
    let response = await axios.get(
      "https://gift-app-shxz.onrender.com/user/allnum"
    );
    setUsercount(response.data.count);
  }

  useEffect(() => {
    getUserCount();
  }, [query]);

  return (
    <div className="App">
      {/* {" "} */}
      <Topmenu getWinner={getWinner} />
      <Navbar getWinner={getWinner} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Moto />
              <UserForm setQuery={setQuery} />
              <PickOneDelAll winner={winner} />
              <UserCount usercount={usercount} />
            </div>
          }
        />
        <Route path="/participants" element={<UserList />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
