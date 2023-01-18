import styles from '@/styles/TrendingCard.module.css';
import { Tomorrow } from '@next/font/google';

const tomorrow = Tomorrow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const TrendingCard = ({ topIcon, title, price, gain, tvl, popularPairs }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={styles.circle}>
        <img src={topIcon} />
      </div>
      <div className={styles.container}>
        <h1 className={`${tomorrow.className} font-semibold mb-4`}>{title}</h1>
        <div
          className={`${styles.innerContainer} ${tomorrow.className} w-full px-4 justify-center gap-4`}
        >
          {price}{' '}
          <span style={{ color: gain[0] === '+' ? '#00ffa3' : '#FF4D4D' }}>
            {gain}
          </span>
        </div>
        <h2 className={`${tomorrow.className} ${styles.subHeading}`}>Price</h2>
        <div
          className={`${styles.innerContainer} ${tomorrow.className} w-full px-4 justify-center`}
        >
          {tvl}
        </div>
        <h2 className={`${tomorrow.className} ${styles.subHeading} mb-2`}>
          TVL
        </h2>
        <div
          className={`${styles.innerContainer} ${tomorrow.className} w-fit gap-2 px-4 py-2 justify-evenly`}
        >
          {popularPairs.map((src, index) => (
            <img width="22px" height="22px" src={src} key={index} />
          ))}
        </div>
        <h2 className={`${tomorrow.className} ${styles.subHeading} mb-2`}>
          Popular Pairs
        </h2>
      </div>
    </div>
  );
};

export default TrendingCard;
