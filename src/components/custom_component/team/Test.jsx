import Image from 'next/image';
import styles from './team.module.css';
export const HumanImageComponent = ({ image }) => {
  return (
    <div className={styles.person}>
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <img className={styles.img} src={image} />
      </div>
    </div>
  );
};
