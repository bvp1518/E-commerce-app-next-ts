
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.logoContainer}>
          <img src="/images/logo.png" alt="purse" className={styles.logoImage} />
          <span className={styles.logoText}>Handmade Bags</span>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={isOpen ? styles.barOpen : styles.bar}></div>
          <div className={isOpen ? styles.barOpen : styles.bar}></div>
          <div className={isOpen ? styles.barOpen : styles.bar}></div>
        </div>

        <ul className={`${styles.navList} ${isOpen ? styles.active : ''}`}>
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
          <div className={styles.cartContainer}>
            <MdOutlineShoppingCart className={styles.cartIcon} />
          </div>
        </ul>

      </div>
    </nav>
  );
}

export default Nav;

