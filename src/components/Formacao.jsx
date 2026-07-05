import styles from "./Formacao.module.css";

function Formacao() {
  return (
    <section className={styles.formacao}>
      <h2 className={styles.title}>Formação</h2>
      <p className={styles.paragrafo}>
        Tecnologia em Defesa Cibernética — UniFECAF (Mai 2026 – Out 2028,
        previsão)
      </p>
      <p className={styles.paragrafo}>
        Técnico em Desenvolvimento de Sistemas — Etec Joaquim Ferreira do Amaral
        (Fev 2026 – Jul 2027, previsão)
      </p>
    </section>
  );
}

export default Formacao;
