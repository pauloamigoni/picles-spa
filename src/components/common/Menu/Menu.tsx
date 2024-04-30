
import styles from './Menu.module.css'

export function Menu() {
    return (
        <>
            <header className={styles.header}>
                <a href="/" className={styles.link}>HOME</a>
                <a href="/sobre" className={styles.link}>SOBRE</a>
                <a href="/abrigos" className={styles.link}>Abrigo Amigo</a>
                <a href="/eventos" className={styles.link}>EVENTOS</a>
                <a href="/" className={styles.link}>FAÇA UMA DOAÇÃO</a>
            </header>
        </>
      
    )
} 