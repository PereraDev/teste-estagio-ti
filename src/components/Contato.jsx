import styles from './Contato.module.css';

function Contato() {
  return (
    <section className={styles.contato}>
      <h2 className={styles.title}>Contato</h2>
      <p className={styles.descricao}>Entre em contato comigo!</p>
      <ul className={styles.lista}>
        <li>Email: <a href="mailto:exemplo@email.com">exemplo@email.com</a></li>
        <li>GitHub: <a href="https://github.com/exemplo" target="_blank" rel="noopener noreferrer">exemplo</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/exemplo" target="_blank" rel="noopener noreferrer">exemplo</a></li>
        <li>Telefone: (11) 1234-5678</li>
      </ul>
    </section>
  );
}

export default Contato;