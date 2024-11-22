import { ContentParagraph } from "../components/ContentParagraph/ContentParagraph";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1 className={styles.tittle}>
            Seja bem vindo!
        </h1>

        <section className={styles.sectionContent}>
        <ContentParagraph color="white">
        Bem-vindo à nossa plataforma de educação sobre energia sustentável e impacto ambiental. Nosso objetivo é educar e conscientizar o público sobre a importância das energias renováveis e como elas podem contribuir para um futuro mais sustentável. Através de conteúdos interativos e informativos, buscamos promover práticas sustentáveis que ajudem a preservar o meio ambiente, reduzir os custos de energia e criar um impacto positivo nas comunidades. Junte-se a nós nessa jornada rumo à transformação!        </ContentParagraph>        
        


        
        <ContentParagraph color="white">
        Nossa plataforma oferece uma vasta gama de conteúdos educativos que explicam os benefícios das energias renováveis e os desafios do uso das fontes de energia não-renováveis. Explore nossos artigos, vídeos e infográficos sobre como a energia solar, eólica, hídrica e biomassa podem moldar o futuro da nossa sociedade. Ao aprender mais sobre as alternativas sustentáveis, você se torna parte da solução para um planeta mais saudável e menos dependente de combustíveis fósseis.
        </ContentParagraph>    
        

        
        <ContentParagraph color="white">
        Testar seus conhecimentos sobre sustentabilidade nunca foi tão divertido! Participe dos nossos quizzes interativos e descubra quanto você realmente sabe sobre energia renovável, eficiência energética e práticas ambientais. A cada quiz completado, você receberá pontuações e recompensas, além de dicas personalizadas sobre como reduzir o impacto ambiental no seu dia a dia. Ao alcançar marcos importantes, você pode ganhar certificados que atestam seu compromisso com a sustentabilidade.
        </ContentParagraph>   

        <ContentParagraph color="white">
        Quer saber mais? Interaja com as funcionalidades do nosso site e explore tudo o que temos para oferecer! Descubra conteúdos educativos, participe de quizzes interativos, e aproveite nossas dicas práticas para um estilo de vida mais sustentável. Não perca as novidades e se envolva na transformação para um futuro mais verde e consciente!
        </ContentParagraph>
        </section>




      </main>

  )
}
