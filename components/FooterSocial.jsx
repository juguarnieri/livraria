import styles from "../styles/FooterSocial.module.css";

const FooterSocial = () => {
    return (
    <div className={styles.socialSection}>
        <h3 className={styles.sectionTitle}>Redes Sociais</h3>
        <ul className={styles.list}>
        <li>📷 <a href="#" className={styles.link}>Instagram</a></li>
        <li>🎵 <a href="#" className={styles.link}>TikTok</a></li>
        <li>🐦 <a href="#" className={styles.link}>Twitter</a></li>
        <li>📺 <a href="#" className={styles.link}>YouTube</a></li>
        </ul>
    </div>
    );
};

export default FooterSocial;