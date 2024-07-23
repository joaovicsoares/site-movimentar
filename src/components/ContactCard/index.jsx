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
                <a href="https://api.whatsapp.com/send/?phone=5547992576526&text&type=phone_number&app_absent=0" target='_blank'>
                    <FaWhatsapp className={styles.whatsIcon}/>
                </a>
                </button>
                <button>
                <a href="https://www.instagram.com/movimentar.bq/" target='_blank'>
                    <FaInstagram className={styles.instaIcon}/>
                </a>
                </button>
            </div>
        </div>
    )
}

export default ContactCard