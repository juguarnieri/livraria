import styles from "../styles/Header.module.css";

const Icons = () => {
    return (
    <div className={styles.icons}>
        <span>❤️</span>
        <span>🛒<sup className={styles.cartCount}>2</sup></span>
        <span>👤</span>
    </div>
    );
};

export default Icons;