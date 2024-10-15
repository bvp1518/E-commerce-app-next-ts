'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import handmade1 from '@/public/images/handmade1.png';
import handmade2 from '@/public/images/handmade2.png';
import handmade3 from '@/public/images/handmade3.png';
import Link from 'next/link';
import styles from './NewCollection.module.css';


const NewCollection: React.FC = () => {
  const images: StaticImageData[] = [handmade1, handmade2, handmade3];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div className={styles.collectionContainer}>
        <div className={styles.collectionContent}>
          <h2 className={styles.collectionTitle}>New Collection</h2>
          <p className={styles.collectionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore deleniti a ex recusandae nulla numquam, explicabo laboriosam sit mollitia nobis, consectetur vitae corrupti optio amet, modi hic magni dignissimos.
          </p>
          <button className={styles.collectionButton}>
            <Link href="/new">New Collection</Link>
          </button>
        </div>
        <div className={styles.collectionImageContainer}>
          <Image
            src={images[currentIndex]}
            className={styles.collectionImage}
            alt='Handmade'
          />
        </div>
      </div>
    </main>
  );
}

export default NewCollection;
