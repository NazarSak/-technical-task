import {useEffect, useState} from "react";
import getUser from "apiUsers/services";
import {Users} from "./users/users";


function App() {
  const [users, setUsers] = useState([]);
  const usersStorage = JSON.parse(localStorage.getItem('users'));

  useEffect(() => {
    getUser()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const formattingUsers = data.map((item) => ({
          ...item,
          follow: false,
        }));
        setUsers(formattingUsers);
        // Иниализация данных когда их нет
        if (usersStorage === null) {
          localStorage.setItem('users', JSON.stringify(formattingUsers));
        }
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <Users users={usersStorage ?? users} setUsers={setUsers}/>
  );
}

export default App;
