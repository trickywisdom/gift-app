import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserCount from './components/UserCount';
import PickOneDelAll from './components/PickOneDelAll';

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserList />
      <UserCount />
      <PickOneDelAll />
    </div>
  );
}

export default App;
