import styles from './Company.module.css'


function Company() {
  return (
      <section className={styles.company_container}>
          <h1 className={styles.title_container}>Sobre a empresa</h1>
          <p>A Festou � uma empresa respons�vel por organizar em um mesmo ambiente funcionalidades para auxiliar tanto Locat�rios que desejam divulgar seus espa�os para eventos, quanto
              Locadores que procuram pelo local ideal gggggggggggpara suas festas. </p>
      </section>
  );
}

export default Company;
