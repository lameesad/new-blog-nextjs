import classes from './contact-form.module.css';
import { useState } from 'react';

function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setenteredMessage] = useState('')

    function sendMessageHandler(event) {
        event.preventDefault();

        // optional: add client-side validation

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    return <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
            <div className={classes.controls}>
                <div className={classes.control} >
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="" id="email"
                        value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)} required />
                </div>
                <div className={classes.control} >
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="" id="name"
                        value={enteredName} onChange={event => setEnteredName(event.target.value)} required />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor="message">Your Message</label>
                <textarea name="" id="message" rows="5" required
                    value={enteredMessage} onChange={event => setenteredMessage(event.target.value)}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
    </section>
}

export default ContactForm