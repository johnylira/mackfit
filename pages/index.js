import React from 'react';
import { useRouter } from 'next/router';

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
      <h1>Bem-vindo ao MackFit!</h1>
      <p>Explore seu potencial de fitness e bem-estar com os melhores recursos, dicas e comunidade de apoio.</p>
      
      <section className="introSection">
        <h2>Transforme Seu Estilo de Vida</h2>
        <p>Descubra rotinas de exercícios personalizadas, planos de alimentação saudável e acompanhamento de metas para impulsionar sua jornada de fitness.</p>
      </section>

      <section className="featuresSection">
        <h2>Nossos Recursos</h2>
        <div className="feature">
          <h3>Treinos Personalizados</h3>
          <p>Programas de treino feitos sob medida, adequados para todos os níveis de fitness.</p>
        </div>
        <div className="feature">
          <h3>Nutrição e Dietas</h3>
          <p>Guias nutricionais e planos alimentares para acompanhar seus objetivos de fitness.</p>
        </div>
        <div className="feature">
          <h3>Comunidade e Suporte</h3>
          <p>Conecte-se com outros entusiastas do fitness e obtenha o suporte que você precisa.</p>
        </div>
      </section>

      <section className="callToAction">
        <h2>Pronto para Começar?</h2>
        <p>Junte-se à nossa comunidade hoje e dê o primeiro passo na sua transformação!</p>
        <button onClick={handleRedirect}>Inscreva-se Agora</button> {/* Adicione o manipulador de eventos onClick */}
      </section>
    </div>
  );
};

export default Home;
