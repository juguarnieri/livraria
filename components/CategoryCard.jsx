import React from 'react';
import styles from '../styles/CategoryCard.module.css'; 

const CategoryCard = ({ name, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CategoryCard;
