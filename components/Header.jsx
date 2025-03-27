import styles from "../styles/Header.module.css";

export default function Header() {
    return (
    <header className={styles.header}>
        <div className={styles.title}>
        <h1>
        <span className={styles["text-green"]}>Entre</span>
        <span className={styles["text-purple"]}>Linhas</span>
        </h1>
        <p>Onde histórias ganham vida</p>
        </div>
        <div className={styles.navbar}>
        <a href="/">Início</a>
        <a href="/livros">Livros</a>
        <a href="/sobre">Sobre</a>
        
        </div>

    </header>
  );
}