import React from 'react';
import Nav from '../component/Nav';
import styles from './page.module.css';
import Footer from '../component/Footer';

const AboutUs: React.FC = () => {
    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>ABOUT US</h1>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
