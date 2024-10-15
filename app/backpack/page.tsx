import React from 'react';
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import styles from './page.module.css'

const Backpack: React.FC = () => {
    return (
      <div className={styles.container}>
        <Nav />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>BACK PACK</h1>
        </div>
        <Footer /> 
      </div>
    );
  };
  
  export default Backpack;
  
  
