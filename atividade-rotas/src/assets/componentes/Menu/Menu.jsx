import styles from './Menu.module.css';
import MenuLink from '../MenuLink/MenuLink';

const Menu = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navegacao}>

                <h1 className={styles.logo}></h1>
                <div className={styles.link}>

                <MenuLink to = "/" >Inicio</MenuLink>
                <MenuLink to = "/sala-de-rotacao" >Sala de Rotação</MenuLink>
                <MenuLink to = "/contato" >Contato</MenuLink>
                </div>
            </nav>
        </header>
    )
}


export default Menu;