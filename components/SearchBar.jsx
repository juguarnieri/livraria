import styles from "../styles/Header.module.css";

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="Buscar livros, autores..." />
            <button>🔍</button>
        </div>
    );
};

export default SearchBar;