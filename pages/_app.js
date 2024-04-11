// pages/_app.js
import Link from 'next/link';
import styles from '../styles/Header.module.css'; // Importa o CSS do cabeçalho
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>MackFit</h1>
      <hr className={styles.navbarUnderline} />
      <nav className={styles.navbar}>
        <Link href="/" legacyBehavior><a>Home</a></Link>
        <Link href="/saude" legacyBehavior><a>Agendamentos</a></Link>
        <Link href="/login" legacyBehavior><a>Membros</a></Link>
        <Link href="/" legacyBehavior><a>Sobre</a></Link>
        <Link href="/" legacyBehavior><a>FAQ</a></Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
