import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from './Home.module.css'


function Home() {
  return (
    <>  
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá, sou <br />
              <span>Matheus Miranda</span> <br />
              Dev Full Stack
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
            </Link>
          </div>

          <figure>
            <img
              className="img-home"
              src="/developer-red.svg"
              alt="Imagem de Home"
            />
          </figure>
        </section>
      </Container>
    </>
  );
}

export default Home;
