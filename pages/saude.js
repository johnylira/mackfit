import React from 'react';
import styles from '../styles/Saude.module.css';

const Saude = () => {
  return (
    <div className={styles.container}>
      <h1>Agendamentos</h1>
      <div className={styles.section}>
        <h2>Nutri</h2>
        <p>Explore suas necessidades nutricionais.</p>
        <button className={styles.button}>Consultar Nutrição</button>
      </div>
      <div className={styles.section}>
        <h2>Exercícios</h2>
        <p>Encontre exercícios adequados para você.</p>
        <button className={styles.button}>Buscar Exercícios</button>
      </div>
    </div>
  );
};

export default Saude;
