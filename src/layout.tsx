import styles from './layout.module.css';
import devpira from './assets/img/Logo.svg';
import pecege from './assets/img/pecege.png';
import { Menu } from './components/common/Menu';


interface ILayout {
    children: React.ReactNode; // Definindo o tipo de children como React.ReactNode
}

export function Layout({ children } : ILayout) {
    return (
        <div className={styles.container}>
          
                <Menu />
           
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
