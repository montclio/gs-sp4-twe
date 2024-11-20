import { Button } from "../components/Button/Button";
import { SustainableEnergySection } from "../components/SustainableEnergySection/SustainableEnergySection";
import styles from "./page.module.css";

export default function EducationalContent() {
  return (
    <body className={styles.body}>
      <main className={styles.main}>

        <section className={styles.sectionGreenContent}>
      <h1 className={styles.tittle}>Energia Sustentável: O Caminho para um Futuro Verde</h1>
      <p className={styles.contentParagraph}>A energia sustentável é um dos pilares fundamentais para enfrentar os desafios ambientais, sociais e econômicos do século XXI. Trata-se de um conceito que engloba fontes de energia capazes de atender às necessidades do presente sem comprometer a capacidade das gerações futuras de satisfazerem suas próprias demandas. Essa abordagem é essencial para mitigar os impactos das mudanças climáticas, reduzir a dependência de combustíveis fósseis e promover o desenvolvimento sustentável em escala global.</p>
      <h1 className={styles.tittle}>O Que é Energia Sustentável?</h1>
      <p className={styles.contentParagraph}>Energia sustentável é aquela obtida de fontes renováveis ou de baixo impacto ambiental, garantindo sua viabilidade a longo prazo. Diferentemente das fontes não renováveis, como petróleo, carvão e gás natural, que são finitas e contribuem significativamente para a emissão de gases de efeito estufa, as fontes sustentáveis são praticamente inesgotáveis e têm impacto reduzido no meio ambiente.</p>
        </section>

        <SustainableEnergySection
        title="Principais Fontes de Energia Sustentável"
        subTitle="Energia Solar"
        content="A energia solar é captada através de paineis fotovoltaicos ou sistemas de aquecimento solar. É uma fonte limpa e abundante, sendo especialmente útil em regiões com alta incidência solar. Os avanços tecnológicos têm reduzido o custo dessa tecnologia, tornando-a acessível para residências, empresas e governos."
      />

        <SustainableEnergySection
        subTitle="Energia Hidrelétrica"
        content="Embora já consolidada, a energia hidrelétrica pode ser considerada sustentável quando projetos de menor escala, como as pequenas centrais hidrelétricas, são utilizados para minimizar impactos ambientais e sociais."
      />

      <SustainableEnergySection
        subTitle="Biomassa"
        content="A biomassa envolve o uso de matéria orgânica, como resíduos agrícolas, florestais e urbanos, para gerar energia. É uma solução sustentável quando empregada de maneira eficiente e integrada ao manejo adequado de recursos naturais."
      />
      
      <SustainableEnergySection
        subTitle="Energia Geotérmica"
        content="A energia geotérmica aproveita o calor natural proveniente do núcleo da Terra para a geração de eletricidade e aquecimento. Esta fonte de energia é limpa, renovável e tem a vantagem de operar continuamente, independentemente das condições climáticas. Contudo, sua viabilidade depende de características geológicas específicas, sendo mais eficiente em regiões com alta atividade tectônica, como áreas vulcânicas. Tecnologias modernas têm expandido o potencial de uso dessa energia, tornando possível o desenvolvimento de projetos em áreas mais diversificadas e menos ativas, mas ainda assim exigindo estudos detalhados e investimentos significativos."
      />
      
      
      <SustainableEnergySection
        subTitle="Energia Oceanica"
        content="A energia oceânica, proveniente do movimento natural dos mares, apresenta um imenso potencial como fonte renovável e sustentável. Tecnologias inovadoras, como turbinas submersas e sistemas de conversão de ondas, buscam capturar a força das marés, correntes e ondas para gerar eletricidade de forma limpa. Essa abordagem pode beneficiar especialmente países com vastas zonas costeiras, contribuindo para diversificar a matriz energética e reduzir a dependência de combustíveis fósseis. Embora os desafios de custo e infraestrutura ainda sejam significativos, o desenvolvimento contínuo dessas tecnologias promete um futuro mais sustentável e alinhado às necessidades energéticas globais."      />

      <section className={styles.sectionGreenContent}>
      <h1 className={styles.tittle}>Beneficios da energia sustentavel</h1>
      <p className={styles.contentParagraph}><strong>Diversificação da Matriz Energética:</strong> Promove uma maior resiliência do sistema energético, garantindo um fornecimento mais estável e menos suscetível a interrupções causadas por crises em fontes específicas.</p>
      <p className={styles.contentParagraph}><strong>Preservação dos Recursos Naturais:</strong> Contribui para a sustentabilidade a longo prazo, garantindo que as futuras gerações também possam desfrutar dos benefícios ambientais.</p>
      <p className={styles.contentParagraph}><strong>Geração de Empregos:</strong> O setor de energia sustentável é um dos que mais cresce, criando oportunidades em pesquisa, desenvolvimento, instalação e manutenção de sistemas.</p>
      <p className={styles.contentParagraph}><strong>Redução de Custos a Longo Prazo:</strong> Apesar do investimento inicial, a energia renovável tende a ser mais econômica ao longo do tempo devido à redução de custos operacionais.</p>
        </section>

        <section className={styles.sectionContent}>
        <h1 className={styles.tittle}>Desafios da implementação</h1>
        <div className={styles.divContent}>
        <p className={styles.subTitle}>Apesar dos benefícios, a transição para um modelo energético sustentável enfrenta desafios:        </p>
        <p className={styles.contentParagraph}>Custo Inicial Elevado: A instalação de sistemas como painéis solares e turbinas eólicas exige investimento significativo.</p>
        <p className={styles.contentParagraph}>Dependência de Recursos Naturais Variáveis: Energia solar e eólica dependem do clima, o que pode limitar sua disponibilidade em certas condições.</p>
        <p className={styles.contentParagraph}>Armazenamento de Energia: Tecnologias de baterias ainda são caras e limitadas para armazenar energia em larga escala.</p>
        <p className={styles.contentParagraph}>Infraestrutura e Políticas: A falta de redes de transmissão adequadas e políticas públicas consistentes pode dificultar a adoção de energia sustentável.</p>
        </div>
        </section>


      <section className={styles.sectionGreenContent}>
      <h1 className={styles.tittle}>Iniciativas Globais e Futuro da Energia Sustentável</h1>
      <p className={styles.contentParagraph}>Organizações internacionais, como as Nações Unidas, têm promovido o uso de energia sustentável por meio de acordos e metas globais, como os Objetivos de Desenvolvimento Sustentável (ODS). O ODS 7, por exemplo, busca garantir acesso universal a energia limpa e acessível até 2030.</p>
      <p className={styles.contentParagraph}>Além disso, avanços tecnológicos, como o uso de inteligência artificial e Internet das Coisas (IoT) na gestão energética, estão tornando a integração de fontes sustentáveis mais eficiente e acessível.</p>

      <h1 className={styles.tittle}>Como Contribuir para a Sustentabilidade Energética?</h1>
      <div className={styles.divContent}>
      <h2 className={styles.subTitle}>Indivíduos, empresas e governos podem desempenhar papéis importantes:</h2>
      <p className={styles.contentParagraph}>Eficiência Energética: Adotar práticas de consumo consciente e tecnologias mais eficientes, como lâmpadas LED e aparelhos com certificação energética.</p>
      <p className={styles.contentParagraph}>Investimentos em Renováveis: Instalar paineis solares, apoiar projetos comunitários e buscar alternativas mais limpas para o transporte, como veículos elétricos.</p>
      </div>
        </section>

        <section className={styles.sectionContent}>
          <h1 className={styles.tittle}>Conclusão</h1>
          <div className={styles.divContent}>
          <p className={styles.contentParagraph}>A energia sustentável é a chave para um futuro mais equilibrado e resiliente. Sua adoção não apenas ajuda a combater as mudanças climáticas, mas também promove o bem-estar social e econômico em escala global. Para alcançar esse objetivo, é necessário um esforço conjunto entre governos, empresas e indivíduos, priorizando inovações e práticas que respeitem o planeta e suas limitações.</p>
          <p className={styles.contentParagraph}>A transição energética não é uma opção, mas uma necessidade para garantir o futuro das próximas gerações.</p>
          </div>
        </section>

      </main>

     </body>
  )
}
