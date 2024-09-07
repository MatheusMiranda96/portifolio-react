import Container from '../../components/Container'
import styles from './Page404.module.css'

function Page404() {
    return(
        <>
        <Container>
            <h2 className={styles.titulo2}>Algo de errado não está certo!</h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span> <br />
                <strong className={styles.texto_red}>OOPS!! PÁGINA NÃO ENCONTRADA. :/</strong>
            </div>
        </Container>
        </>
    )
}

export default Page404