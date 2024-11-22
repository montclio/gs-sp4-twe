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
  
  const [email, setEmail] = useState(''); // Usando email em vez de username
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  // Definir o CEP da Avenida Paulista (FIAP Paulista)
  const avenidaPaulistaCep = '01311-000'; // Exemplo de CEP

  const handleLogin = async () => {
    // Verificando se o email e senha são válidos
    if (email === 'exemplo@fiap.com' && senha === 'senha123') {
      try {
        // Criar o objeto para enviar ao AuthContext com os mesmos atributos
        const user = {
          nome: 'Exemplo',         // Nome de exemplo
          cep: avenidaPaulistaCep, // CEP da Avenida Paulista
          sobrenome: 'Usuário',    // Sobrenome de exemplo
          email,                   // Email fornecido pelo usuário
          dataDeNascimento: '2000-01-01', // Data de nascimento de exemplo
          senha,                   // Senha fornecida pelo usuário
        };

        // Usando o login do contexto e passando o objeto de exemplo
        login(user);
        setError(''); // Limpando qualquer erro anterior
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input 
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <div className={styles.buttonsDiv}>
            <Button
              label="Entrar"
              backgroundColor="#51E54F"
              width="10rem"
              height="3rem"
              onClick={() => handleLogin()}  // Chama handleLogin ao clicar
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <span className={styles.span}>OU</span>
            <Button
              label="Cadastrar"
              backgroundColor="#195C18"
              width="10rem"
              height="3rem"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
