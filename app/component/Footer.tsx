import React from 'react';
import Styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContainer}>
        <p className={Styles.content}> &copy; 2024 Handmade Bags. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
