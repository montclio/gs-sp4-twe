import styles from "./page.module.css";
import leo from "../assets/leo.png"
import peter from "../assets/peter.png"
import vitor from "../assets/vitor.png"

import { DeveloperCard } from "../components/DeveloperCard/DeveloperCard";


export default function About() {
  return (
      <main className={styles.main}>
        <section className={styles.devSection}>
        <DeveloperCard
                      name="Vitor Gomes"
                      rm="558244"
                      imageSrc={vitor}
                      linkedinUrl="https://www.linkedin.com/in/vitor-gomes-martins-90a045280/" 
                      gitUrl="https://github.com/vitor4818"      />

        <DeveloperCard
                      name="Pedro Lima"
                      rm="558243"
                      imageSrc={peter}
                      linkedinUrl="https://www.linkedin.com/in/pedro-henrique-lima-939b08286/" 
                      gitUrl="https://github.com/30lima"     />

        <DeveloperCard
                      name="Leonardo Pimentel"
                      rm="557541"
                      imageSrc={leo}
                      linkedinUrl="https://www.linkedin.com/in/leonardo-pimentel-0a9773273/"
                      gitUrl="https://github.com/Leonardo-dev-br"      />
        </section>
      </main>
  )
}