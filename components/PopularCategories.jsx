import React from 'react';
import styles from '../styles/PopularCategories.module.css'; 

export default function PopularCategories({ categories }) {
  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category, index) => (
        <div key={index} className={styles.categoryItem}>
          <span className={styles.categoryIcon}>{category.icon}</span>
          <p className={styles.categoryName}>{category.name}</p>
        </div>
      ))}
    </div>
  );
}
