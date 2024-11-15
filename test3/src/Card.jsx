import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, title, price, rating, buttonLabel }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p className={styles.price}>${price}</p>
      <div className={styles.rating}>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < rating ? styles.filledStar : styles.emptyStar}>
            ★
          </span>
        ))}
      </div>
      <button className={styles.button}>{buttonLabel}</button>
    </div>
  );
};

export default Card;
