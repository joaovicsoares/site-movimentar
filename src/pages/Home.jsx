import Header from '../components/Header/index.jsx'
import MainImg from '../components/MainImg/index.jsx'
import ArticleCard from '../components/ArticleCard/index.jsx'
import ArticleImg from '/test.png'
import PostsSection from '../components/PostsSection/index.jsx'
import ContactSection from '../components/ContactSection/index.jsx'
import Footer from '../components/Footer/index.jsx'
import TeamSection from '../components/TeamSection/index.jsx'

function Home() {
    return (
        <div className='homeContainer'>
            <Header id = 'top' project='#project' posts='/#posts' contact='/#contact' headerBtn='/ajude-nos'
            textBtn='ajude-nos'/>
            <MainImg/>
            <section id='project' className='center'>
                <h1>Projeto</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum turpis, condimentum ut erat quis, eleifend consectetur eros. Nullam nunc sapien, pellentesque maximus feugiat vitae, vehicula id nisi. Nam posuere, turpis ac suscipit imperdiet, lacus felis sodales ligula, et aliquam ante dui et turpis. Donec dui ante, elementum eu felis a, egestas luctus mauris. Sed placerat pharetra justo, quis rutrum risus commodo vel. Proin vehicula augue dolor. Donec fermentum quam vel mi volutpat sagittis. Nunc elementum mi blandit ligula venenatis placerat. In tempor eu turpis vitae ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla at est ultrices, pellentesque leo at, pulvinar est. Morbi pretium pellentesque ipsum, et malesuada velit molestie in. Sed gravida pulvinar imperdiet.</p>
                <section className='cardSection center'>
                    <ArticleCard title="Nossa Missão" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum turpis, condimentum ut erat quis, eleifend consectetur eros. Nullam nunc sapien, pellentesque maximus feugiat vitae, vehicula id nisi" articleImg={ArticleImg} altText="imagem projeto"/>
                    <ArticleCard title="Origem" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum turpis, condimentum ut erat quis, eleifend consectetur eros. Nullam nunc sapien, pellentesque maximus feugiat vitae, vehicula id nisi" articleImg={ArticleImg} altText="imagem projeto"/>
                    <ArticleCard title="Equipe" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum turpis, condimentum ut erat quis, eleifend consectetur eros. Nullam nunc sapien, pellentesque maximus feugiat vitae, vehicula id nisi" articleImg={ArticleImg} altText="imagem projeto"/>
                </section>
                <TeamSection/>
            </section>
            <section id='posts'>
                <h1>Ultimas Postagens</h1>
                <PostsSection />
            </section>
            <section id='contact'>
                <h1>Fale Conosco</h1>
                <ContactSection/>
            </section>
            <Footer/>
        </div>
    )
}

export default Home