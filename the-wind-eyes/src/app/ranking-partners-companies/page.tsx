import { useState, useEffect } from "react";
import RankingCard from "../components/RankingCard/RankingCard";
import styles from "./page.module.css";
import axios from "axios";

export default function RankingPartnersCompanies() {
  const [idPartnersCompanies, setIdPartnersCompanies] = useState(""); 
  const [companyData, setCompanyData] = useState(null); 
  const [error, setError] = useState("");

  // Função para buscar dados da empresa
  const fetchCompanyData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/empresaVerdePatrocinadora/${id}`);
      setCompanyData(response.data);
      setError(""); 
    } catch (err) {
      console.error("Erro ao buscar dados da empresa:", err);
      setError("Erro ao buscar os dados da empresa. Verifique o ID informado.");
      setCompanyData(null); 
    }
  };


  useEffect(() => {
    if (idPartnersCompanies) {
      fetchCompanyData(idPartnersCompanies);
    }
  }, [idPartnersCompanies]);

  return (
    <main className={styles.main}>
      <h1 className={styles.tittle}>Ranking parceiros</h1>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Digite o ID da empresa"
          value={idPartnersCompanies}
          onChange={(e) => setIdPartnersCompanies(e.target.value)}
          className={styles.input}
        />
        <button onClick={() => fetchCompanyData(idPartnersCompanies)} className={styles.button}>
          Buscar Empresa
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {companyData ? (
        <div className={styles.companyData}>
          <h2>{companyData.nome}</h2>
          <p><strong>Descrição:</strong> {companyData.descricao}</p>
          <p><strong>Ranking:</strong> {companyData.ranking}</p>
        </div>
      ) : (
        <p>Digite um ID válido para buscar os dados da empresa.</p>
      )}

      {/* Exemplo fixo de RankingCard */}
      <RankingCard companie="1. Greentech" percentual="89%" scoreWidth="89%" />
      <RankingCard companie="2. Suzano" percentual="42%" scoreWidth="42%" />
      <RankingCard companie="3. Siemens" percentual="32%" scoreWidth="32%" />
      <RankingCard companie="4. Ambev" percentual="25%" scoreWidth="25%" />
    </main>
  );
}
