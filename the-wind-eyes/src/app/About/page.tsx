import styles from "./page.module.css";
import leo from "../assets/leo.png"
import Image from "next/image";
import { DeveloperCard } from "../components/DeveloperCard/DeveloperCard";


export default function EducationalContent() {
  return (
    <body className={styles.body}>
      <main className={styles.main}>

        <section className={styles.devSection}>



        <DeveloperCard
        name="Vitor Gomes"
        rm="558244"
        imageSrc={leo}
        linkedinUrl="https://www.linkedin.com/in/vitor-gomes-martins-90a045280/"
      />



        </section>

      </main>
    </body>
  )
}
