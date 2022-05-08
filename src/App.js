import { useState, createContext } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';

import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';

export const UserContext = createContext();

function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [user, setUser] = useState({ name: "", id: "", email: "" });
  const setUserContext = (newUser) => { console.log("setUserContext"); setUser(newUser); };
  console.log("Rendering App");
  return (
    <UserContext.Provider value={{ user, setUserContext }}>
      <div className="App">
        <Navbar />
        {user.id !== "" &&<Form oldRefreshKey={refreshKey} onUpdate={newKey => setRefreshKey(newKey)} />}
        {user.id !== "" &&<TodoList parentRefreshKey={refreshKey}/>}
        {user.id === "" && <Auth />}
      </div>
    </UserContext.Provider>
  );
}




export default App;
