import styles from "../styles/FooterLinksCategories.module.css";

const FooterLinksCategories = () => {
  return (
    <div className={styles.linksCategoriesSection}>
    
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
    </div>
  );
};

export default FooterLinksCategories;
