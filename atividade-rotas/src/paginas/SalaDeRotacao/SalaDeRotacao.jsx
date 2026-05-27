import CartaoProduto from "../../assets/componentes/CartaoProduto/CartaoProduto";
import styles from "./SalaDeRotacao.module.css";

const SalaDeRotacao = () => {
  return (
    <section className={styles.container}>

    <h1 className={styles.titulo}>
    Coleção Funko Mistério
    </h1>
    <div className={styles.cards}>
    <CartaoProduto 
    nome="Scooby-Doo e Salsicha"
    preco="149,90"
    imagem="/boneco1.jpg"
    />

    <CartaoProduto
    nome="Scooby-Doo e Fantasma"
    preco="120,90"
    imagem="/boneco2.jpg"
    />

    <CartaoProduto
    nome="Salsicha"
    preco="89,90"
    imagem="/boneco3.png"
    />

    </div>
    </section>
  );
};

export default SalaDeRotacao;
