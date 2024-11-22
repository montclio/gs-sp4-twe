'use client';
import styles from "./page.module.css";
import Image from "next/image";
import userIcon from "../assets/userIcon.png";
import { useEffect, useState } from "react";
import { useAuth } from "../../../Context/AuthContext"; // Importando o AuthContext
import { ContentParagraph } from "../components/ContentParagraph/ContentParagraph";

// Definindo o tipo para o CEP
type CepType = {
  neighborhood: string;
};

export default function Profile() {
  const { user } = useAuth(); // Pegando os dados do usuário do AuthContext
  const [cep, setCep] = useState<CepType | null>(null);

  useEffect(() => {
    const searchCep = async () => {
      try {
        if (user?.cep) { // Verificando se o usuário tem o cep
          const response = await fetch(
            `https://brasilapi.com.br/api/cep/v2/${user.cep}`
          );
          const data = await response.json();
          setCep(data);
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    };

    // Executa a busca do CEP apenas uma vez
    if (user?.cep) {
      searchCep();
    }
  }, [user?.cep]); // Recarrega a busca de CEP se o CEP do usuário mudar

  return (
    <main className={styles.main}>
      <section className={styles.profileSection}>
        <div className={styles.userDiv}>
          <div className={styles.imageDiv}>
            <Image
              src={userIcon}
              alt={"User icon"}
              width={150}
              height={150}
            />
            <ContentParagraph color="white" fontSize="1.5rem">
              {user?.nome} {user?.sobrenome}
            </ContentParagraph>
          </div>
          <div className={styles.infoDiv}>
            <p className={styles.p}>Data de nascimento: {user?.dataDeNascimento}</p>
            <p className={styles.p}>
              Bairro: {cep?.neighborhood || "Bairro não encontrado"}
            </p>
            <p className={styles.p}>Email: {user?.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
