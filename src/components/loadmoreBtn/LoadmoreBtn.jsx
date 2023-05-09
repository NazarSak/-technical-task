import styles from "./loadMore.module.css"

export const LoadmoreBtn = ({onClick}) => {
  return <button type="button" onClick={onClick} className={styles.loader}>Load More</button>;
};
