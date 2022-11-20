import styles from './Company.module.css'


function Company() {
  return (
      <section >
          <h1 className={styles.title_container}>Sobre a empresa</h1>
          <p className={styles.company_container}>
              A Festou e uma empresa responsavel por organizar em um mesmo ambiente funcionalidades para auxiliar tanto Locatarios que desejam divulgar seus espacos para eventos, quanto
              Locadores que procuram pelo local ideal para suas festas. </p>
      </section>
  );
}

export default Company;
