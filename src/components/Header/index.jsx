import "../../../public/logo-movimentar.jpg"
import { Link } from "react-router-dom"
import styles from './styles.module.css'
import { useState } from 'react'

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={`center ${styles.center}`}>
                <img src="logo-movimentar.jpg" alt="Logo instituto movimentar" />
                <div className={styles.menuContainer}>
                    <div className={`${styles.menuIcon} ${menuOpen ? styles.change : ''}`} onClick={toggleMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <nav className={`${styles.menu} ${menuOpen ? styles.showMenu : ''}`}>
                        <a className={styles.projectBtn} href={props.project}>Projeto</a>
                        <a className={styles.postsBtn} href={props.posts}>Postagens</a>
                        <a className={styles.contactBtn} href={props.contact}>Contato</a>
                        <div className={styles.btnWraper}>
                            <div className={styles.donationBtn}><Link className={styles.linkDonation} to={props.headerBtn}>{props.textBtn}</Link></div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header