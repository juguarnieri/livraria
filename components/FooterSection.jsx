import styles from "../styles/FooterSection.module.css";
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className={styles.linksCategoriesSection}>
      <div className={styles.logoSection}>
        <span className={styles.brand}>
          Entre<span className={styles.highlight}>Linhas</span>
        </span>
        <p className={styles.subtitle}>Onde histórias ganham vida</p>
        <p className={styles.description}>
          A EntreLinhas é uma livraria online que conecta leitores ávidos com os melhores e mais diversos livros do mercado.
        </p>
      </div>

      <div className={styles.linksSection}>
        <h3 className={styles.sectionTitle}>Links Rápidos</h3>
        <ul className={styles.list}>
          <li><a href="#" className={styles.link}>Home</a></li>
          <li><a href="#" className={styles.link}>Catálogo</a></li>
          <li><a href="#" className={styles.link}>Ofertas</a></li>
          <li><a href="#" className={styles.link}>Sobre Nós</a></li>
          <li><a href="#" className={styles.link}>Contato</a></li>
        </ul>
      </div>

      <div className={styles.categoriesSection}>
        <h3 className={styles.sectionTitle}>Categorias</h3>
        <ul className={styles.list}>
          <li><a href="#" className={styles.link}>Ficção Científica</a></li>
          <li><a href="#" className={styles.link}>Romance</a></li>
          <li><a href="#" className={styles.link}>Tecnologia</a></li>
          <li><a href="#" className={styles.link}>Fantasia</a></li>
          <li><a href="#" className={styles.link}>História</a></li>
        </ul>
      </div>

      <div className={styles.socialSection}>
        <h3 className={styles.sectionTitle}>Redes Sociais</h3>
        <ul className={styles.list}>
  <li>
    <FaInstagram className={`${styles.icon} ${styles.iconInstagram}`} />
    <a href="#" className={styles.link}>Instagram</a>
  </li>
  <li>
    <FaTiktok className={`${styles.icon} ${styles.iconTiktok}`} />
    <a href="#" className={styles.link}>TikTok</a>
  </li>
  <li>
    <FaTwitter className={`${styles.icon} ${styles.iconTwitter}`} />
    <a href="#" className={styles.link}>Twitter</a>
  </li>
  <li>
    <FaYoutube className={`${styles.icon} ${styles.iconYoutube}`} />
    <a href="#" className={styles.link}>YouTube</a>
  </li>
</ul>
      </div>
    </div>
  );
};

export default FooterSection;