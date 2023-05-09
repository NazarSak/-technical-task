import React, { useEffect } from 'react';
import { UserItem } from 'components/UserItem/UserItem';
import styles from './ul.module.css';
import { LoadmoreBtn } from 'components/loadmoreBtn/LoadmoreBtn';
import { useState } from 'react';


export const Users = ({ users, setUsers }) => {
  const [sliceUser, setSliceUser] = useState(users.slice(1, 3));
  const [perPage, setPerPage] = useState(3);
  const onClick = () => {
    setPerPage(perPage + 3);
    console.log(perPage);
  };

  useEffect(() => {
    const addsliceUser = [...users].slice(0, perPage);
    setSliceUser(addsliceUser);
  }, [perPage, users]);

  return (
    <ul className={styles.list}>
      {sliceUser.map(user => {
        return <UserItem key={user.id} user={user} setUsers={setUsers} />;
      })}
      
   {perPage < 27 ? <LoadmoreBtn onClick={onClick} /> : <h2>That's all</h2>}
    </ul>
  );
};
