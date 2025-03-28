import styles from "../styles/FooterBottom.module.css";

const FooterBottom = () => {
    return (
    <div className={styles.footerBottom}>
        <p>© 2023 BookVerse. Todos os direitos reservados.</p>
        <div className={styles.policies}>
        <a href="#" className={styles.link}>Política de Privacidade</a>
        <a href="#" className={styles.link}>Termos de Uso</a>
        <a href="#" className={styles.link}>Política de Cookies</a>
        </div>
    </div>
    );
};

export default FooterBottom;
