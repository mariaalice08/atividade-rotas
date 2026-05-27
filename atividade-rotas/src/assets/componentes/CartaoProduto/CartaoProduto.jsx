import styles from "./CartaoProduto.module.css";

const CartaoProduto = ({ nome, preco, imagem}) => {
    return (
        <div className={styles.cartao}>
            <img className={styles.imagem} src={imagem} alt={nome} />
            <h2 className={styles.nome}>{nome}</h2>
            <p className={styles.preco}>R$ {preco}</p>
        </div>
    );
}
export default CartaoProduto;