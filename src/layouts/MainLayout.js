import React from 'react';
import Image from 'next/image';
import fish from '@images/fish.png';
import styles from '@styles/Layout.module.css';

const MainLayout = ({children}) => {
  return (
    <div className={styles.content}>
      <div>
        <header className={styles.header}>
          <Image className={styles.image} src={fish} alt='logo'/>
          <h1 className={styles.title}><span>fish</span>Checker</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout