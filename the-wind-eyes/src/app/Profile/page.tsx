"use client";
import { ContentParagraph } from "../components/ContentParagraph/ContentParagraph";
import styles from "./page.module.css";
import Image from "next/image";
import userIcon from "../assets/userIcon.png";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
  const searchParams = useSearchParams();
  const [cep, setCep] = useState({});
  const user = JSON.parse(searchParams.get("user") || "{}");
  const cepParams = JSON.parse(searchParams.get("cep") || "{}");

  useEffect(() => {
    const searchCep = async () => {
      try {
        const response = await fetch(
          `https://brasilapi.com.br/api/cep/v2/${cepParams}`
        );
        const data = await response.json();
        setCep(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    };

    // Executa a busca do CEP apenas uma vez
    searchCep();
  }, [cepParams.cep]); // Dependência do CEP: garante que o fetch só ocorra se o cepParams.cep mudar

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
              {user.nome} {user.sobrenome}
            </ContentParagraph>
          </div>
          <div className={styles.infoDiv}>
            <p className={styles.p}>{user.dataDeNascimento}</p>
            <p className={styles.p}>{cep.neighborhood || "Bairro não encontrado"}</p>
            <p className={styles.p}>Email: {user.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
