import styles from './Home.module.css'
import party from '../../img/party.png'

import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Festou</span>
      </h1>
      <p>Exponha seu local ou encontre o Salão de Festas ideal para seu evento</p>
      <LinkButton to="/newlocal" text="Criar local" />
      <img src={party} alt="Savings" />
    </section>
  )
}

export default Home
