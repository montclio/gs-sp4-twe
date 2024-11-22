'use client'
import { Button } from "../components/Button/Button";
import RankingCard from "../components/RankingCard/RankingCard";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';



export default function RankingGreenCompanies() {
  const router = useRouter();
  return (
      <main className={styles.main}>
        <h1 className={styles.tittle}>Ranking verde</h1>

        <RankingCard companie="1. Greentech" percentual="89%" scoreWidth="89%" />
        <RankingCard companie="2. Suzano" percentual="42%" scoreWidth="42%" />
        <RankingCard companie="3. Siemens" percentual="32%" scoreWidth="32%" />
        <RankingCard companie="4. Ambev" percentual="25%" scoreWidth="25%" />

        <Button 
         label={"Parceiros"} 
         backgroundColor="#34B032" 
         onClick={() => router.push('/ranking-partners-companies')} 
        />


      </main>
  );
}
