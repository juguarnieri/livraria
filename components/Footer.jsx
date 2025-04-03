import styles from "../styles/Footer.module.css";
import FooterSection from "./FooterSection";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      <FooterSection />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
