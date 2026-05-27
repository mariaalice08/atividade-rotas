import styles from './Banner.module.css'; 

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.textos}>
                <h1 className={styles.titulo}>Bem-vindo à Funko Mistério</h1>
                <p className={styles.paragrafo}>A Funko Mistério é
                    uma loja especializada em Funko Pops
                    inspirados no universo
                    Scooby-Doo. 
                </p>
                <p className={styles.paragrafo}>
                    Aqui você encontra modelos exclusivos do Scooby, Salsicha e criaturas misteriosas para completar sua coleção.
                </p>
            </div>
            <img className={styles.imagem}
            src="/imgInicio.jpg" alt="Logo da Funko Mistério" />
        </section>

    );
}
export default Banner;