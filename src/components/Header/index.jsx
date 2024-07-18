import "../../../public/logo-movimentar.jpg"
import { Link } from "react-router-dom"

function Header({props}) {
    return (
        <header className="header">
            <img src="logo-movimentar.jpg" alt="Logo instituto movimentar" />

            <nav>
                <a id="projectBtn" href="#project">Projeto</a>
                <a id="postsBtn" href="#posts">Postagens</a>
                <a id="contactBtn" href="#contact">Contato</a>
                <div id="donationBtn"><Link to={'/ajude-nos'}>Ajude-Nos</Link></div>
            </nav>
        </header>
    )
}

export default Header