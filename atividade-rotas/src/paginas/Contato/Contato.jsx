import styles from './Contato.module.css';

const Contato = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Entre em Contato</h1>

      <form className={styles.formulario}>

        <input className={styles.input} type="text" placeholder="Nome" />
        <input className={styles.input} type="email" placeholder="Email" />
        <button className={styles.botao} type="submit">Enviar</button>

      </form>

    </section>
  );
};

export default Contato;
