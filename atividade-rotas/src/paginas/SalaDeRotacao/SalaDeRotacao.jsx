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
    nome="Salsicha Rogerse"
    preco="89,90"
    imagem="/boneco3.png"
    />

     <CartaoProduto
    nome="Velma Dinkley"
    preco="89,90"
    imagem="/bonecoVelma.jpg"
    />

     <CartaoProduto
    nome="Fred Jones"
    preco="89,90"
    imagem="/bonecoFred.jpg"
    />

     <CartaoProduto
    nome="Daphne Blake"
    preco="89,90"
    imagem="/bonecoDafine.jpg"
    />

    <CartaoProduto
    nome="Scooby-Doo"
    preco="99,90"
    imagem="/bonecoScooby.jpg"
    />

    <CartaoProduto
    nome="o Fanstama do Capitão Cutler"
    preco="82,90"
    imagem="/bonecoMonstro.jpg"
    />

    
    </div>
    </section>
  );
};

export default SalaDeRotacao;
