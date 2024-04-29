import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { Toaster, toast } from 'sonner';
import { useShelter } from '../../../hook/useShelter';

import { FaPalette, FaImages, FaThumbtack, FaHeart, FaChartLine, FaFire, FaGem, FaCaretUp, } from 'react-icons/fa6'

export function Sidebar() {

    const { data } = useShelter();

    function validate(event: React.MouseEvent) {
        const canAccess = !!data?.shelterWhatsApp;

        if (!canAccess) {
            event.preventDefault()
            toast.error('Acesso negado!')
        }
        toast.success('Acesso permitido! Bem vindo(a) ' + data?.shelterName)


    }
   
    
    return (
        <div className={styles.navBar}>
            <input className={styles.navToggle} type="checkbox" id="nav-toggle" />
            <div className={styles.navHeader}>
                <a className={styles.navTitle} href="https://codepen.io" target="_blank" rel="noopener noreferrer">
                    C<FaImages />DEPEN
                </a>
                <label htmlFor="nav-toggle">
                    <span className={styles.navToggleBurger}></span>
                </label>
                <hr className={styles.navDivider} />
            </div>
            <div className={styles.navContent}>
                <div className={styles.navButton}><FaPalette /><span>Trabalhos</span></div>
                <div className={styles.navButton}><FaImages /><span>Assets</span></div>
                <div className={styles.navButton}><FaThumbtack /><span>Itens fixados</span></div>
                <hr className={styles.navDivider} />
                <div className={styles.navButton}><FaHeart /><span>Seguidores</span></div>
                <div className={styles.navButton}><FaChartLine /><span>Trending</span></div>
                <div className={styles.navButton}><FaFire /><span>Desafios</span></div>
                <div className={styles.navButton}><FaImages /><span>fagulhas</span></div>
                <hr className={styles.navDivider} />
                <div className={styles.navButton}><FaGem /><span>Codepen Pro</span></div>
                <div className={styles.navContentHighlight}></div>
            </div>
            <input className={styles.navFooterToggle} type="checkbox" id="nav-footer-toggle" />
            <div className={styles.navFooter}>
                <div className={styles.navFooterHeading}>
                    <div className={styles.navFooterAvatar}>
                        <img src="https://assets.codepen.io/10263767/internal/avatars/users/default.png" alt="User Avatar" />
                    </div>
                    <div className={styles.navFooterTitlebox}>
                        <a className={styles.navFooterTitle} href="" target="_blank" rel="noopener noreferrer">
                            Programador Designer
                        </a>
                        <span className={styles.navFooterSubtitle}>Admin</span>
                    </div>
                    <label htmlFor="nav-footer-toggle"><FaCaretUp /></label>
                </div>
                <div className={styles.navFooterContent}>
                   dsfsdfs
                </div>
            </div>
        </div>
    );

    // return (
    //     <>
    //         <nav className={style['nav-bar']}>
    //             <NavLink className={({ isActive }) => (isActive ? style.active : '')} to="/admin" end>Meu abrigo</NavLink>
    //             <NavLink
    //                 onClick={validate}
    //                 className={({ isActive }) => (isActive ? style.active : '')} to="/admin/pets">Pets</NavLink>
    //             <NavLink to="/">Sair</NavLink>
    //         </nav>
    //         <Toaster position='top-center' richColors={true} />
    //     </>

    // );
}