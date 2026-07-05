import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.sobre}>
        <h2 className={styles.title}>Sobre mim</h2>
        <p className={styles.paragrafo}>
        Olá! Sou Alex Pereira, de Bocaina/Jaú (SP). Depois de 3 anos administrando minha própria operação de gestão de tráfego pago (Google Ads e Meta Ads), decidi migrar para desenvolvimento de software, aplicando a mesma bagagem analítica — leitura de métricas, testes, decisões orientadas por dados — agora na construção de sistemas.
        </p>
        <p className={styles.paragrafo}>
        Já desenvolvi um sistema de gestão de hospedagem em C#/.NET, com cálculo dinâmico de diárias e regras de sazonalidade, e um site completo em HTML5/CSS3. Também tenho experiência prática com Git e GitHub para versionamento e documentação.
        </p>
        <p className={styles.paragrafo}>
        Estou em busca de um estágio em TI para aplicar esse histórico analítico e continuar evoluindo como programador.
        </p>
    </section>
  );
}

export default Sobre;