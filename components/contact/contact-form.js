import classes from './contact-form.module.css';

function ContactForm() {
    return <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} action="">
            <div className={classes.controls}>
                <div className={classes.control} >
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="" id="email" required />
                </div>
                <div className={classes.control} >
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="" id="name" required />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor="message">Your Message</label>
                <textarea name="" id="message" rows="5"></textarea>
            </div>
            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
    </section>
}

export default ContactForm