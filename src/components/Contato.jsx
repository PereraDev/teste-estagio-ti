import styles from './Contato.module.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contato() {
  return (
    <section className={styles.contato}>
      <h2 className={styles.title}>Contato</h2>
      <p className={styles.descricao}>Entre em contato comigo!</p>
      <ul className={styles.lista}>
        <li>
          <FaEnvelope /> Email:{" "}
          <a href="mailto:pereraacompany@gmail.com">pereraacompany@gmail.com</a>
        </li>
        <li>
          <FaGithub /> GitHub:{" "}
          <a
            href="https://github.com/PereraDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            PereraDev
          </a>
        </li>
        <li>
          <FaLinkedin /> LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/alex-pereira-8743a13b5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alex Pereira
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contato;
