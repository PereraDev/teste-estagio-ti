import styles from './Conhecimentos.module.css';

function Conhecimentos() {
  return (
    <section className={styles.conhecimentos}>
      <h2 className={styles.title}>Conhecimentos</h2>
      <p className={styles.descricao}>Conhecimentos em programação e tecnologia.</p>
      <ul className={styles.lista}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>C#</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
}

export default Conhecimentos;