import Container from "../../components/Container"
import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";


function Contatos() {
    return(
        <>
        <Container>
            <section className={styles.contatos}>
                <h2>Contatos</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre.</p>

                <div className={styles.icones}>

                    <a href="https://wa.link/xk5547" target='_blank' rel='noopener noreferrer'>
                        <BsWhatsapp className={styles.icone}/>
                    </a>
                    <a href="mailto:matth.miranda@gmail.com" target='_blank' rel='noopener noreferrer'>
                        <GoMail className={styles.icone}/>
                    </a>

                    <a href="https://github.com/MatheusMiranda96" target="_blank" rel='noopener noreferrer'>
                        <BsGithub className={styles.icone}/>
                    </a>

                    <a href="https://www.linkedin.com/in/matheus-alves-miranda-95831b150/" target="_blank" rel='noopener noreferrer'>
                        <BsLinkedin className={styles.icone}/>
                    </a>

                </div>

            </section>
        </Container>
        </>
    )
}

export default Contatos