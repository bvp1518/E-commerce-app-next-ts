import React from 'react';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import styles from  './page.module.css';

const Page: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Nav />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>SHOPPING BAGS</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
