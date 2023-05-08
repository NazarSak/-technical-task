import { TweetPage } from "pages/TweetsPage";
import { Route,Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import HomePage from "pages/Homepage";


const App = () => {
return(
  <>
  <Routes>

    <Route path="/" element={<Layout />}>
       <Route index element={<HomePage />} />
       <Route path="tweets" element={<TweetPage />} />
       <Route path="*" element={<HomePage />} />
    </Route>
  </Routes>
  </>
)
}

export default App



// import {useEffect, useState} from "react";
// import getUser from "apiUsers/services";
// import {Users} from "./users/users";

// import { useState,useEffect } from "react";
// import { Users } from "./users/users";
// import getUser from "apiUsers/services";

// function App() {
//   const [users, setUsers] = useState([]);
//   const usersStorage = JSON.parse(localStorage.getItem('users'));

//   useEffect(() => {
//     getUser()
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then((data) => {
//         const formattingUsers = data.map((item) => ({
//           ...item,
//           follow: false,
//         }));
//         setUsers(formattingUsers);
  
//         if (usersStorage === null) {
//           localStorage.setItem('users', JSON.stringify(formattingUsers));
//         }
//       })
//       .catch((error) => console.log(error));
//   }, []);


//   return (
//     <Users users={usersStorage ?? users} setUsers={setUsers}/>
//   );
// }

// export default App;
