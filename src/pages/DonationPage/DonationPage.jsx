import Header from '../../components/Header/index.jsx'
import QrCodeImg from '/test.png'
import styles from './styles.module.css'

function DonationPage() {
  return (
    <div className={styles.donationPage}>
      <Header/>
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
    </div>
  );
}

export default DonationPage;