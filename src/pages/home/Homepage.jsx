import styles from './homePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Welcome back!
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};
