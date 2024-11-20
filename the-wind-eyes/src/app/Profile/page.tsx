import { ContentParagraph } from "../components/ContentParagraph/ContentParagraph";
import styles from "./page.module.css";
import Image from "next/image"
import userIcon from "../assets/userIcon.png"

export default function Profile() {
  return (
    <body className={styles.body}>
      <main className={styles.main}>

        <section className={styles.profileSection}>


                <div className={styles.userDiv}>
                    <div className={styles.imageDiv}>
                    <Image src={userIcon} alt={"User icon"} width={150} height={150} />
                    <ContentParagraph color="white" fontSize="1.5rem">
                        Gabriel
                    </ContentParagraph>
                    </div>
                    <div className={styles.infoDiv}>

                    <p className={styles.p}>
                        Data de nascimento: xx/xx/xxxx
                    </p>
                    <p className={styles.p}>
                        Endereço: Av. Paulista
                    </p>
                    <p className={styles.p}>
                        Email: usuario@email.com
                    </p>
                    </div>



                 </div>

        </section>


      </main>
     </body>
  )
}
