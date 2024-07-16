import styles from './styles.module.css';

function ContactForm () {
    return (
        <form className={styles.contactForm} action="">
            <input className={styles.nameInput} type="text" placeholder="Nome" required/>
            <input className={styles.emailInput} type="email" placeholder="Email" required/>
            <textarea className={styles.textInput} placeholder="Mensagem" required></textarea>
            <button className={styles.submitBtn} type="submit">Enviar</button>
        </form>
    )
}

export default ContactForm