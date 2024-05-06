
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

export function Menu() {
    return (
        
            <nav className={styles.header}>
                <NavLink to="/" className={styles.link} >HOME</NavLink>
                <NavLink to="/sobre" className={styles.link}>SOBRE</NavLink>
                <NavLink to="/abrigos" className={styles.link}>Abrigo Amigo</NavLink>
                <NavLink to="/eventos" className={styles.link}>EVENTOS</NavLink>
                <NavLink to="/" className={styles.link}>FAÇA UMA DOAÇÃO</NavLink>
            </nav>
        
      
    )
} 