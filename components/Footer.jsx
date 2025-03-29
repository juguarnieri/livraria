import styles from "../styles/Footer.module.css";
import FooterLogo from "./FooterLogo";
import FooterLinksCategories from "./FooterLinksCategories";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterLogo />
        <FooterLinksCategories />
        <FooterSocial />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
