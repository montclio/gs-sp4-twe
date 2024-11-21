import { Apresentation } from './components/Apresentation/Apresentation'
import { Button } from './components/Button/Button'
import { ContentParagraph } from './components/ContentParagraph/ContentParagraph'
import styles from './page.module.css'

export default function LandingPage() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>THE WIND EYES</h1>

        <Apresentation color='#43CE41' alignSelf='flex-start' borderRadius={{topLeft: '0px',
          topRight: '60px',
          bottomLeft: '0px',
          bottomRight: '60px',}}>
          <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae inventore nisi fugit similique sed necessitatibus maiores numquam, repellendus ea! Delectus saepe tenetur possimus exercitationem nihil quibusdam. Placeat, asperiores ducimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque suscipit et quasi corporis, delectus alias consectetur facere accusantium quae obcaecati exercitationem ducimus reprehenderit blanditiis ea ipsa ab aperiam. Odit.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas corporis voluptates excepturi cumque blanditiis? Tenetur in aut laudantium! Adipisci perspiciatis dolores similique enim, saepe exercitationem illo aspernatur eos doloribus voluptatem?          
          </p>
        </Apresentation>

        <Apresentation color='#5EDA5C' alignSelf='flex-end' borderRadius={{topLeft: '60px',
          topRight: '0px',
          bottomLeft: '60px',
          bottomRight: '0px',}}>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae inventore nisi fugit similique sed necessitatibus maiores numquam, repellendus ea! Delectus saepe tenetur possimus exercitationem nihil quibusdam. Placeat, asperiores ducimus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque suscipit et quasi corporis, delectus alias consectetur facere accusantium quae obcaecati exercitationem ducimus reprehenderit blanditiis ea ipsa ab aperiam. Odit.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas corporis voluptates excepturi cumque blanditiis? Tenetur in aut laudantium! Adipisci perspiciatis dolores similique enim, saepe exercitationem illo aspernatur eos doloribus voluptatem?          
          </p>
        </Apresentation>


        <section className={styles.greenRanking}>
        <ContentParagraph color='white'>
          O Ranking Verde é uma classificação que destaca empresas comprometidas com a sustentabilidade, considerando práticas ambientais responsáveis e o uso de tecnologias verdes. Ele oferece uma visão clara para consumidores e investidores sobre as organizações que contribuem para um futuro mais sustentável. Nossa análise foi baseada nos dados da empresa "nome da empresa aqui", uma fonte confiável que atualizou as informações até este ano, assegurando que o ranking reflita o cenário atual do mercado sustentável.
          </ContentParagraph>
        </section>

  <h1>Quer saber mais?</h1>
        <Button
    label="Clique aqui!"
    backgroundColor="#51E54F"
    width='23rem'
    height='5rem'
/>
      </main>
    </>
  )
}
