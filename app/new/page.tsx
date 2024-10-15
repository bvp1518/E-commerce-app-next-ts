import React from 'react';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import styles from './Page.module.css'; 

const Page: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Nav />
      <div className={styles.content}>
        <h1 className={styles.title}>NEW COLLECTION</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
