import styles from '../styles/lastStatics.module.css';

import luffy from '../assets/luffy.jpg';

const LastStatics = () => {
  return (
    <div className={styles.lastMainContainer}>
      <img src={luffy} alt="luffy" />
    </div>
  );
};
export default LastStatics;
