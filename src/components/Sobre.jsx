import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.sobre}>
        <h2 className={styles.title}>Sobre mim</h2>
        <p className={styles.paragrafo}>
            Olá! Meu nome é Alex Pereira, tenho 24 anos e sou um estudante da Etec Jau cursando Desenvolvimento de Software e estou estudando Defesa Cibernética na UniFECAF. Atualmente, estou em busca de uma oportunidade de estágio na área de TI para aplicar meus conhecimentos e aprender ainda mais.
        </p>
        <p className={styles.paragrafo}>
            Tenho experiência em programação, iniciais em JavaScript e Python. Além disso, estou sempre buscando me atualizar sobre as últimas tendências e inovações no campo da tecnologia.
        </p>
        <p className={styles.paragrafo}>
            Sou uma pessoa dedicada, proativa e com grande vontade de aprender. Acredito que um estágio em TI será uma excelente oportunidade para desenvolver minhas habilidades e contribuir para o crescimento da empresa.
        </p>
    </section>
  );
}

export default Sobre;