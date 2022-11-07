import styles from './Company.module.css'


function Company() {
  return (
      <section className={styles.company_container}>
          <h1 className={styles.title_container}>Sobre a empresa</h1>
          <p>A Festou é uma empresa responsável por organizar em um mesmo ambiente funcionalidades para auxiliar tanto Locatários que desejam divulgar seus espaços para eventos, quanto
              Locadores que procuram pelo local ideal gggggggggggpara suas festas. </p>
      </section>
  );
}

export default Company;
