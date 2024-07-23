import styles from './styles.module.css'
import "../../../public/logo-movimentar.jpg"

function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.left}>
                <img src="logo-movimentar.jpg" alt="" />
                <div className={styles.rightsContainer}>
                    <p>&copy; 2024 Instituto Movimentar. Todos os direitos reservados.</p>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.backContainer}>
                    <a href="#top">Voltar ao Topo</a>
                </div>
                <div className={styles.devContainer}>
                    <p>Desenvolvido por <a href="https://portifolio-desenvolvedor.com" target="_blank">João Victor Soares</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;