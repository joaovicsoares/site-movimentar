import styles from './styles.module.css';
import { FaLocationDot, FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function ContactCard () {
    return (
        <div className={styles.contactCard}>
            <div className={styles.mapsContainer}>
                <a href="">
                <FaLocationDot className={styles.dotIcon}/>
                </a>
                <p>R.Augusto Klapoth, 1313 - Santa Luzia, Brusque-SC, 88357-260</p>
            </div>
            <div className={styles.emailContainer}>
                <MdOutlineEmail className={styles.emailIcon}/>
                <p>Email: movimentar.bq@gmail.com</p>
            </div>
            <div className={styles.socialMediaContainer}>
                <button>
                <FaWhatsapp className={styles.whatsIcon}/>
                </button>
                <button>
                <FaInstagram className={styles.instaIcon}/>
                </button>
            </div>
        </div>
    )
}

export default ContactCard