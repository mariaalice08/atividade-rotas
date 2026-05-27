import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.container}>
        <div className={styles.textos}>
          <h1 className={styles.titulo}>Bem-vindo à Funko Mistério</h1>
          <p className={styles.texto}>A Funko Mistério é uma loja criada para os fãs do universo Scooby-doo que adoram colecionar Funkos exclusivos. Nossa missão é trazer diversão e nostalgia para os colecionadores</p>
        </div>

        <img className={styles.imagem}
        src="/fotoPrincipal.jpg" alt="Bonecos Funko" />

    </section>
  );
};

export default Home;
