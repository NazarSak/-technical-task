import React from "react";
import UserItem from "../UserItem/UserItem";
import styles from "./ul.module.css"

export const Users = ({users, setUsers}) => {

  return (
    <ul className={styles.list}>
      {users.map((user) => {
        return (
          <UserItem key={user.id} user={user} setUsers={setUsers}/>
        );
      })}
    </ul>
  );
};
