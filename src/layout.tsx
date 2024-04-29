import React from 'react';
import styles from './layout.module.css';
import devpira from './assets/img/Logo.svg';
import pecege from './assets/img/pecege.png';
import { Menu } from './components/common/Menu';

export function Layout({ children }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Menu />
            </header>
            <main className={styles.mainContent}>
                <section className={styles.hero}>
                    {children}
                </section>
            </main>
            <footer className={styles.footer}>
                <img src={devpira} alt='Dev Pira' width={120} />
                <p>Projeto de Desenvolvimento curso FullStack Pecege.</p>
                <img src={pecege} alt='Pecege' width={120} style={{ marginLeft: '10px' }} />
            </footer>
        </div>
    );
}
