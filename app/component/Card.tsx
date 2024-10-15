import styles from './Card.module.css';
import { Purse1, Purse2, Purse3, Purse4, Purse5, Purse6, Purse7, Purse8, Purse9, Purse10, Purse11, Purse12, Purse13, Purse14, Purse15, Purse16 } from '@/public/images';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

function Card() {
  const purseData: StaticImageData[] = [
    Purse1, Purse2, Purse3, Purse4, Purse5, Purse6, Purse7, Purse8,
    Purse9, Purse10, Purse11, Purse12, Purse13, Purse14, Purse15, Purse16
  ];

  return (
    <div className={styles.cardContainer}>
      {purseData.map((item, index) => (
        <div key={index} className={styles.cardItem}>
          <Image
            src={item}
            className={styles.cardImage}
            alt={`purse-${index}`}
          />
          <p className={styles.cardTitle}>{`purse-${index + 1}`}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
