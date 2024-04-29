
import styles from './Menu.module.css'

export function Menu() {
    return (
         <>
            <a href="/" className={styles.link}>HOME</a>
            <a href="/sobre" className={styles.link}>SOBRE</a>
            <a href="#" className={styles.link}>Abrigo Amigo</a>
            <a href="/eventos" className={styles.link}>EVENTOS</a>
            <a href="#" className={styles.link}>FAÇA UMA DOAÇÃO</a>
            </>
      
    )
} 