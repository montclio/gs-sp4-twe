'use client';
import React, { useState } from 'react';
import { Button } from "../components/Button/Button";
import Input from "../components/Input/Input";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../Context/AuthContext'; // Importando o hook useAuth

export default function Login() {
  const router = useRouter();
  const { login } = useAuth(); // Pegando a função login do contexto
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (username === 'a' && password === 'a') {
      try {
        // Usando o login do contexto
        login(username, password);
        setError('');
        router.push('/home');  // Redireciona após o login bem-sucedido
      } catch (error) {
        console.error('Login failed:', error);
        setError('Erro ao tentar fazer login');
      }
    } else {
      setError('Nome de usuário ou senha incorretos');
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.loginCenter}>
        <div className={styles.divForms}>
          <h1 className={styles.tittle}>ENTRAR</h1>

          <Input 
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input 
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.buttonsDiv}>
            <Button
              label="Entrar"
              backgroundColor="#51E54F"
              width="20rem"
              height="3rem"
              onClick={() => handleLogin()}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <span className={styles.span}>OU</span>
            <Button
              label="Cadastrar"
              backgroundColor="#195C18"
              width="20rem"
              height="3rem"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
