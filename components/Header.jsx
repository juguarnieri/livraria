import styles from "../styles/Header.module.css";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Icons from "./Icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.brand}>
          Entre<span className={styles.highlight}>Linhas</span>
        </span>
        <p className={styles.subtitle}>
          <span className={styles.line}></span>
          Onde histórias ganham vida
          <span className={styles.line}></span>
        </p>
      </div>

      <NavBar />
      <div className={styles.actions}>
        <SearchBar />
        <Icons />
      </div>
    </header>
  );
};

export default Header;