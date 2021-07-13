import Image from 'next/image';
import classes from './hero.module.css'

function Hero() {

    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/lamees.jpg" alt="An image show Lamees" width={300} height={300} />
            </div>
            <h1>Hi I'm Lamees</h1>
            <p>
                Blog about web development - especially frontend frameworks like React.
            </p>
        </section>
    )
}

export default Hero