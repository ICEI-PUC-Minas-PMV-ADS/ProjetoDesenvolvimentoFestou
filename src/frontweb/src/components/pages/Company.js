import styles from './Company.module.css'


function Company() {
  return (
      <section >
          <h1 className={styles.title_container}>Sobre a empresa</h1>
          <p className={styles.company_container}>A Festou � uma empresa respons�vel por organizar em um mesmo ambiente funcionalidades para auxiliar tanto Locat�rios que desejam divulgar seus espa�os para eventos, quanto
              Locadores que procuram pelo local ideal gggggggggggpara suas festas. </p>
      </section>
  );
}

export default Company;
