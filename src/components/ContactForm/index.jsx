import styles from './styles.module.css';
import { useState } from 'react';

function ContactForm () {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: 'Contato pelo site',
        honeypot: '', 
        message: '',
        replyTo: '@',
        accessKey: import.meta.env.VITE_EMAIL_TOKEN 
      });
      const [formKey, setFormKey] = useState(Date.now());
    
      const handleSubmit = async e => {
        e.preventDefault();
        try {
          const res = await fetch('https://api.staticforms.xyz/submit', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: { 'Content-Type': 'application/json' }
          });

          const json = await res.json();

          if (json.success) {
            console.log('Mensagem enviada com sucesso');

            setContact({
                name: '',
                email: '',
                subject: 'Contato pelo site',
                honeypot: '', 
                message: '',
                replyTo: '@', 
                accessKey: import.meta.env.VITE_EMAIL_TOKEN 
                
              });
                setFormKey(Date.now());
          } 

        } catch (e) {
          console.log('Ocorreu um erro', e);
        }
      };

    return (
        <form 
        key={formKey}
        className={styles.contactForm} 
        action="https://api.staticforms.xyz/submit"
        method='post'
        onSubmit={ handleSubmit}
        >
            <input 
            className={styles.nameInput} 
            type="text" 
            placeholder="Nome" 
            name='name'
            onChange={e => setContact({ ...contact, name: e.target.value })}
            required
            />
            <input 
            className={styles.emailInput} 
            type="email" 
            placeholder="Email"
            name='email'
            onChange={e => setContact({ ...contact, email: e.target.value })} 
            required
            />
            <textarea 
            className={styles.textInput} 
            placeholder="Mensagem"
            name='message' 
            onChange={e => setContact({ ...contact, message: e.target.value })}
            required
            ></textarea>
            <button 
            className={styles.submitBtn} 
            type="submit"
            >
                Enviar
            </button>
        </form>


    )
}

export default ContactForm