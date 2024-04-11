import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Home = () => {
  const router = useRouter();

  // useEffect(() => {
  //   router.push('/login');
  // }, [router]);

  // Função para redirecionar para a página saude.js
  const handleRedirect = () => {
    router.push('/login');
  };
  return (
    <div className="homeContainer">
      {/* Seção 1 - MackFit */}
      <div className={styles.sectionContainer}>
      <div className={styles.backgroundImage}></div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1 className={styles['center-text']}>MackFit</h1>
        <p className={styles['center-text']}>Explore seu potencial de fitness e bem-estar com os melhores recursos, dicas e comunidade de apoio.</p>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>

      <section className="introSection">
      <div className={styles.transformeImage}></div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h2 className={styles['center-text']}>Transforme Seu Estilo de Vida</h2>
        <p className={styles['center-text']}>Descubra rotinas de exercícios personalizadas, planos de alimentação saudável e acompanhamento de metas para impulsionar sua jornada de fitness.</p>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </section>

      <section className="featuresSection">
        <div className={styles.recursosImage}></div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h2 className={styles['center-text']}>Nossos Recursos</h2>
        <div className="feature">
          <h3 className={styles['center-text']}>Treinos Personalizados</h3>
          <p className={styles['center-text']}>Programas de treino feitos sob medida, adequados para todos os níveis de fitness.</p>
        </div>
        <div className="feature">
          <h3 className={styles['center-text']}>Nutrição e Dietas</h3>
          <p className={styles['center-text']}>Guias nutricionais e planos alimentares para acompanhar seus objetivos de fitness.</p>
        </div>
        <div className="feature">
          <h3 className={styles['center-text']}>Comunidade e Suporte</h3>
          <p className={styles['center-text']}>Conecte-se com outros entusiastas do fitness e obtenha o suporte que você precisa.</p>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </section>

      <section className="callToAction">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h2 className={styles['center-text']}>Pronto para Começar?</h2>
        <p className={styles['center-text']}>Junte-se à nossa comunidade hoje e dê o primeiro passo na sua transformação!</p>
        
        <div className={styles['btn-container']}>
            <button onClick={handleRedirect} className={styles['btn-style']}>Inscreva-se Agora</button>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </section>
    </div>
  );
};

export default Home;
