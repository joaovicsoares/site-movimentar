import "../../../public/logo-movimentar.jpg"

function Header() {
    return (
        <header className="header">
            <img src="logo-movimentar.jpg" alt="Logo instituto movimentar" />

            <nav>
                <a id="projectBtn" href="#project">Projeto</a>
                <a id="postsBtn" href="#posts">Postagens</a>
                <a id="contactBtn" href="#contact">Contato</a>
                <div id="donationBtn"><a href="">Ajude-Nos</a></div>
            </nav>
        </header>
    )
}

export default Header