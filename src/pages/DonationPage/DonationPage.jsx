import Header from '../../components/Header/index.jsx'
import QrCodeImg from '/test.png'
import styles from './styles.module.css'
import Footer from '../../components/Footer/index.jsx';

function DonationPage() {
  return (
    <div className={styles.donationPage}>
      <Header project='/#project' posts='/#posts' contact='/#contact' headerBtn='/'
            textBtn='Pagina inicial'/>
      <div className={styles.contentContainer}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna orci, vestibulum vitae ex  id, sagittis vestibulum mi. Nunc purus tortor, efficitur sit amet elit ac, tristique venenatis erat.</p>
        <div className={styles.pixContainer}>
          <div>
            <p>Chave pix: movimentar.bq@gmail.com</p>
            <button onClick={() => {
              navigator.clipboard.writeText('movimentar.bq@gmail.com')
            }}>Copiar Chave</button>
          </div>
         <p>Ou escaneie o QR code</p>
          <img src={QrCodeImg} alt="Qr code pix" />  
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default DonationPage;