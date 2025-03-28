import styles from "../styles/BookCard.module.css";

export default function BookCard({ title, author, price, rating, tags, isNew }) {
    return (
      <div className={styles.card}>
        {isNew && <span className={styles.newTag}>Novo</span>} 

        <img src="/placeholder.jpg" alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>por {author}</p>
        <div className={styles.rating}>⭐ {rating}</div>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles["price-and-icons"]}>
          <p className={styles.price}>{price}</p>
          <div className={styles.icons}>
            <button>🛒</button>
            <button>❤️</button>
          </div>
        </div>
      </div>
    );
  }