import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/festou_logo.png";

function NavbarLogout() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Festou" />
        </Link>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/login">Login</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default NavbarLogout;
