import React from 'react';
import { UserItem } from 'components/UserItem/UserItem';
import styles from './ul.module.css';
import { useState } from 'react';
import { CARDS_PER_PAGE } from 'config/constant';
import { LoadmoreBtn } from 'components/loadmoreBtn/LoadmoreBtn';

export const Users = ({ users, setUsers }) => {
  const [page, setPage] = useState(1);
  const [usersToShow, setUsersToShow] = useState(users.slice(0, CARDS_PER_PAGE * page));

  const loadMore = () => {
  setPage(page + 1);
  setUsersToShow(users.slice(0, CARDS_PER_PAGE * (page + 1)));
};

  return (
    <ul className={styles.list}>
      {users.map(user => {
        return <UserItem key={user.id} user={user} setUsers={setUsers} />;
      })}
      {usersToShow.length < users.length && <LoadmoreBtn type="button" onClick={loadMore}/>}
    </ul>
  );
};
