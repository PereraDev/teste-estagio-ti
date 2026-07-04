import styles from './Formacao.module.css';

function Formacao() {
  return (
    <section className={styles.formacao}>
        <h2 className={styles.title}>Formação</h2>
        <p className={styles.paragrafo}>
            Atualmente, estou cursando Desenvolvimento de Software na Etec Jau e Defesa Cibernética na UniFECAF. Estou sempre buscando aprimorar meus conhecimentos e habilidades na área de TI, participando de cursos, workshops e eventos relacionados à tecnologia.
        </p>
        <p className={styles.paragrafo}>
            Acredito que a formação acadêmica é fundamental para o desenvolvimento profissional, e estou comprometido em continuar aprendendo e me atualizando para me tornar um profissional qualificado e preparado para os desafios do mercado de trabalho.
        </p>
    </section>
  );
}

export default Formacao;