import hacker from '../assets/hacker.jpg';
import styles from '../styles/topStatics.module.css';

const TopStatics = () => {
  return (
    <div className={styles.topMainContainer}>
      <img src={hacker} alt="hacker" />
    </div>
  );
};
export default TopStatics;
