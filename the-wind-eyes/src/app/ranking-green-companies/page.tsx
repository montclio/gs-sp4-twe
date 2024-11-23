'use client'
import { useEffect, useState } from 'react';
import { Button } from "../components/Button/Button";
import RankingCard from "../components/RankingCard/RankingCard";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';

// Definindo o tipo para a estrutura dos dados de cada empresa
interface Empresa {
  nome_empresa: string;
  percentual: number; // Percentual como número para cálculos, pode ser formatado como string no front-end
}

export default function RankingGreenCompanies() {
  // Tipando o estado "ranking" como um array de "Empresa"
  const [ranking, setRanking] = useState<Empresa[]>([]);
  const router = useRouter();

  // Função para buscar dados da API
  const fetchRankingData = async () => {
    try {
      // Substitua pelo URL correto da sua API FastAPI
      const response = await fetch('http://127.0.0.1:8000/ranking');
      const data: Empresa[] = await response.json(); // Tipando a resposta como um array de "Empresa"
      setRanking(data); // Atualiza o estado com os dados da API
    } catch (error) {
      console.error('Erro ao buscar o ranking:', error);
    }
  };

  // UseEffect para chamar a função de busc a assim que o componente for montado
  useEffect(() => {
    fetchRankingData();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.tittle}>Ranking verde</h1>

      {/* Renderiza os cards de acordo com os dados da API */}
      {ranking.map((empresa, index) => (
        <RankingCard 
          key={index}
          companie={`${index + 1}. ${empresa.nome_empresa}`} 
          percentual={`${empresa.percentual}%`} 
          scoreWidth={`${empresa.percentual}%`} 
        />
      ))}

      <Button 
        label={"Parceiros"} 
        backgroundColor="#34B032" 
        onClick={() => router.push('/ranking-partners-companies')} 
      />
    </main>
  );
}
