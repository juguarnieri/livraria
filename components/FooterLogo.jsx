import styles from "../styles/FooterLogo.module.css";

const FooterLogo = () => {
return (
    <div className={styles.logoSection}>
    <span className={styles.brand}>
        Entre<span className={styles.highlight}>Linhas</span>
    </span>
    <p className={styles.subtitle}>Onde histórias ganham vida</p>
    <p className={styles.description}>
        A EntreLinhas é uma livraria online que conecta leitores ávidos com os melhores e mais diversos livros do mercado.
    </p>
    </div>
  );
};

export default FooterLogo;
