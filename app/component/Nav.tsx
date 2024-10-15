import Link from 'next/link';
import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from './Nav.module.css'; // Import the CSS module

const Nav: React.FC = () => {
  return (    
      <nav className={styles.navContainer}>
        <div className={styles.navContent}>
          <div className={styles.logoContainer}>
            <img src="/images/logo.png" alt="purse" className={styles.logoImage} />
            <span className={styles.logoText}>Handmade Bags</span>
          </div>

          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/new">New</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/shopping-bags">Shopping Bags</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/backpack">Backpack</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/cosmetic-bags">Cosmetic Bags</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>

          <div className={styles.cartContainer}>
            <MdOutlineShoppingCart className={styles.cartIcon} />
          </div>
        </div>
      </nav>    
  );
}

export default Nav;
