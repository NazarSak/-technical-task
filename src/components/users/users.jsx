import React from 'react';
import { UserItem } from 'components/UserItem/UserItem';
import styles from './ul.module.css';
import { LoadmoreBtn } from 'components/loadmoreBtn/LoadmoreBtn';
import { useState } from 'react';

export const Users = ({ users, setUsers }) => {
  const [sliceUser, setSliceUser] = useState(users.slice((1, 37)));

  const addsliceUser = users.slice((1, 8));

  const onClick = () => {
    setSliceUser(...sliceUser, ...addsliceUser);
    console.log(sliceUser);
  };

  return (
    <ul className={styles.list}>
      {users.map(user => {
        return <UserItem key={user.id} user={user} setUsers={setUsers} />;
      })}
      <LoadmoreBtn onClick={onClick} />
    </ul>
  );
};
