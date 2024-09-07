import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from './Projetos.module.css'

function Projetos() {

  const [repositories, setRepositories] = useState([]) /* "repositories é uma variavel/estado que vai armazenar uma lista de repositórios" */

    useEffect(() => {
        const buscarRepositorios = async () => {  /*requisição para o github */
          const response = await fetch('https://api.github.com/users/matheusmiranda96/repos') /* const response vai fazer uma busca na url */
          const data = await response.json() /* const data para armazenar a resposta em formato json */
          setRepositories(data) /* Alterando o estado para o resultado */
        }
        buscarRepositorios() /* Executando a função */
      }, []) /*array vazio só vai carregar a função uma vez ao abrir a página*/

  return (
    <section className={styles.projetos}>
        <h2>Projetos</h2>
       {   /* renderização condicional */
        repositories.length > 0 ? (
          <section className={styles.lista}>
            {
              repositories.map((repo) => (  /* Mapeamento dos repositórios */
                <Card 
                  key={repo.id} 
                  name={repo.name} 
                  description={repo.description} 
                  html_url={repo.html_url}
                />
              ))
            }
          </section> 
        ) : (
          <p>Carregando repositórios...</p>
        )
       }   
    </section>
  );
}

export default Projetos;
