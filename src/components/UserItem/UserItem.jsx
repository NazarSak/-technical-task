import React from 'react';
import styles from './usersItem.module.css';
import logo from "../../image/logo.svg"
import card from "../../image/card-image.svg"

export const UserItem = ({ user, setUsers }) => {
  const users = JSON.parse(localStorage.getItem('users'));
  const { twets, followers, avatar, id, follow } = user;

  const setFollowing = id => {
    const usersFollow = users.map(user =>
      user.id === id
        ? {
            ...user,
            follow: !user.follow,
            followers: user.followers + 1,
          }
        : user
    );
    localStorage.setItem('users', JSON.stringify(usersFollow));
    setUsers(usersFollow);
  };

  const setUnfollowing = id => {
    const usersFollow = users.map(user =>
      user.id === id
        ? {
            ...user,
            follow: !user.follow,
            followers: user.followers - 1,
          }
        : user
    );
    localStorage.setItem('users', JSON.stringify(usersFollow));
    setUsers(usersFollow);
  };

  return (
    <li key={id} className={styles.wrapper}>
      <img src={logo} alt="GO-IT-logo" width="70px" height="20px" className={styles.logo}/>
      <img src={card} alt="GO-IT-card" />
      <div className={styles.line}/>
      <div className={styles.circle}/>
      <img src={avatar} alt={`${user} avatar`} width="100px" height="100px" className={styles.avatar} />
      <h3 className={styles.tweets}>{twets} Tweets</h3>
      <h3 className={styles.followers}>{followers.toLocaleString('en-US')} Followers</h3>
      {follow ? (
        <button
          onClick={() => setUnfollowing(id)}
          type="button"
          className={styles.button}
          style={{ backgroundColor: follow ? '#5CD3A8' : '#EBD8FF' }}
          id={id}
        >
          {<span>Following</span>}
        </button>
      ) : (
        <button
          onClick={() => setFollowing(id)}
          type="button"
          className={styles.button}
          style={{ backgroundColor: follow ? '#5CD3A8' : '#EBD8FF' }}
          id={id}
        >
          {follow ? <span>Following</span> : <span>Follow</span>}
        </button>
      )}
    </li>
  );
};


