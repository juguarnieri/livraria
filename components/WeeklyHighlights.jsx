import React from "react";
import BookCard from "./BookCard";
import styles from "../styles/WeeklyHighlights.module.css";
export default function WeeklyHighlights({ books }) {
    return (
      <section className={styles.container}>
        <div className={styles.cards}>
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </section>
    );
  }