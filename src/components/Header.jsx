import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://placehold.co/120"
        alt="Foto de perfil"
        className={styles.photo}
      />
      <h1 className={styles.name}>Alex Pereira</h1>
      <p className={styles.role}>Cargo desejado: Estágio em TI</p>
    </header>
  );
}

export default Header;