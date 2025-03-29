import React from 'react';
import styles from '../styles/SectionHeader.module.css'; 

const SectionHeader = ({ title, linkText }) => {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <a href="#">{linkText}</a>
    </div>
  );
};

export default SectionHeader;