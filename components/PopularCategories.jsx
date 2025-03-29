import React from 'react';
import CategoryCard from './CategoryCard';
import styles from '../styles/PopularCategories.module.css'; 

const PopularCategories = ({ categories }) => { 
  return (
    <section>
      <div className={styles['category-list']}>  
        {categories.map((cat, i) => (
          <CategoryCard key={i} name={cat.name} icon={cat.icon} />
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;