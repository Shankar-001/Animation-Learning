import styles from '../styles/rolling.module.css';
import hacker from '../assets/hacker.jpg';
import luffy from '../assets/luffy.jpg';
import naruto from '../assets/naruto.jpg';
import nezouko from '../assets/nezouko.jpg';
import zoro from '../assets/ZORO.jpg';
import { useState } from 'react';
import { useEffect } from 'react';

const Rolling = () => {
  const images = [hacker, luffy, naruto, nezouko, zoro];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondCurrentIndex, setSecondCurrentIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(function () {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setSecondCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.scrollElement} ${styles.display}`}>
        <Image src={images[currentIndex]} alt={images[currentIndex]} />
      </div>
      <div className={`${styles.scrollElement} ${styles.display2}`}>
        <Image
          src={images[secondCurrentIndex]}
          alt={images[secondCurrentIndex]}
        />
      </div>
    </div>
  );
};
export default Rolling;

const Image = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};
