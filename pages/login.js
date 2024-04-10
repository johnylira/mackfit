import React from 'react';
import styles from '../styles/Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login/Cadastro</h1>
        {/* Campos do formulário */}
        <input className={styles.inputStyle} type="email" placeholder="Email" />
        <input className={styles.inputStyle} type="password" placeholder="Senha" />
        <button className={styles.buttonStyle} type="submit">Entrar</button>
        <button className={styles.buttonStyle} type="button">Cadastrar</button>
      </form>
    </div>
  );
};

export default Login;
