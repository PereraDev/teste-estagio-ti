import styles from "./Header.module.css";
import fotoPerfil from "../assets/foto-perfil.jpeg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={fotoPerfil} alt="Foto de perfil" className={styles.photo} />
      <h1 className={styles.name}>Alex Pereira</h1>
      <p className={styles.role}>Cargo desejado: Estágio em TI</p>
    </header>
  );
}

export default Header;
