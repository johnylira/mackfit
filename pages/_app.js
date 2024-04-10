// pages/_app.js
import Link from 'next/link';
import styles from '../styles/Header.module.css'; // Importa o CSS do cabeçalho
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" legacyBehavior><a>Home</a></Link>
        <Link href="/saude" legacyBehavior><a>Saúde</a></Link>
        <Link href="/login" legacyBehavior><a>Login/Cadastro</a></Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
