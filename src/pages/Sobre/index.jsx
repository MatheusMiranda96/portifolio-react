import styles from './Sobre.module.css';
import avatar from './images/avatar.png';
import html from './images/icon-html.svg';
import css from './images/icon-css.svg';
import js from './images/icon-js.svg';
import react from './images/icon-react.svg';
import node from './images/icon-node.svg';
import sql from './images/icon-sql.svg';


function Sobre() {
  return (
    <section className={styles.sobre}>

      <div className={styles.bio}> 
        <img src={avatar} className={styles.avatar} alt="Avatar" />

        <div className={styles.textos}>
            <h2>Sobre</h2>

            <p>
            Sou <span>Matheus Miranda</span> <br />
            <strong>Dev Full Stack</strong>
            </p>

            <p>Trabalho com desenvolvimento Web desde 2022.</p>

            <p>Atualmente cursando Análise de Desenvolvimento de Sistemas.</p>

            <p>Sou apaixonado por transformar ideias em realidade digital.</p>

            <p>
            Especializado em criação de aplicações dinâmicas e intuitivas, com
            foco na experiência do usuário.
            </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img src={html} alt="Icone HTML" />
          <img src={css} alt="Icone CSS" />
          <img src={js} alt="Icone JS" />
          <img src={react} alt="Icone REACT" />
          <img src={node} alt="Icone NODE" />
          <img src={sql} alt="Icone SQL" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
