import styles from './styles.module.css'
import ContactForm from '../ContactForm'
import ContactCard from '../ContactCard'

function ContactSection () {
    return (
        <div className={styles.contactSection}>
            <ContactCard/>
            <ContactForm/>
        </div>
    )
}

export default ContactSection