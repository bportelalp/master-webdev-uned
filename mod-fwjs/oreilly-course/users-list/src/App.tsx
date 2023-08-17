import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { User } from './interfaces/User';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prev) => {
      return [...prev, user]
    });
  }

  return (
    <div>
      <AddUser onNewUser={(usr) => addUser(usr)}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
