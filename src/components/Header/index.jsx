import "../../../public/logo-movimentar.jpg"
import { Link } from "react-router-dom"
import styles from './styles.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src="logo-movimentar.jpg" alt="Logo instituto movimentar" />

            <nav>
                <a className={styles.projectBtn} href="#project">Projeto</a>
                <a className={styles.postsBtn} href="#posts">Postagens</a>
                <a className={styles.contactBtn} href="#contact">Contato</a>
                <div className={styles.btnWraper}>
                    <div className={styles.donationBtn}><Link className={styles.linkDonation} to={'/ajude-nos'}>Ajude-Nos</Link></div>
                </div>
            </nav>
        </header>
    )
}

export default Header