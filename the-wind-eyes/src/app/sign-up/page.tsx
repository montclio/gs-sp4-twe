'use client'
import queryString from 'query-string'; // Instale este pacote:
import { useState } from "react";
import { Button } from "../components/Button/Button";
import Input from "../components/Input/Input";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../Context/AuthContext"; // Importando o contexto

export default function SignUp() {
  const router = useRouter();
  const { login } = useAuth(); // Pega a função de login do AuthContext

  const [birthdayDate, setBirthdayDate] = useState("");
  const [apiCep, setApiCep] = useState("");
  const [cep, setCep] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [senha, setSenha] = useState("");

  // Função de validação dos campos
  const validateFields = async () => {
    if (!nome.trim()) {
      alert("Por favor, preencha o nome.");
      return false;
    }

    if (!sobrenome.trim()) {
      alert("Por favor, preencha o sobrenome.");
      return false;
    }

    if (!signUpEmail.trim() || !/\S+@\S+\.\S+/.test(signUpEmail)) {
      alert("Por favor, preencha um email válido.");
      return false;
    }

    if (!birthdayDate.trim()) {
      alert("Por favor, preencha a data de nascimento.");
      return false;
    }

    if (!senha.trim() || senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return false;
    }

    return true;
  };

  const handleSignUp = async () => {
    const isValid = await validateFields();
    if (!isValid) {
      return;
    }

    const user = {
      nome,
      sobrenome,
      email: signUpEmail,
      dataDeNascimento: birthdayDate,
      senha,
    };

    const params = queryString.stringify({
      user: JSON.stringify(user),
      cep: JSON.stringify(cep)
    });

    alert("Cadastro realizado com sucesso!");
    login(signUpEmail, senha); // Atualiza o contexto para marcar como logado
    router.push(`/profile?${params}`); // Redireciona para o perfil
  };

  return (
    <main className={styles.main}>
      <section className={styles.signupCenter}>
        <div className={styles.divForms}>
          <h1 className={styles.tittle}>CADASTRAR</h1>
          <Input
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />

          <Input
            type="text"
            placeholder="Sobrenome"
            onChange={(e) => setSobrenome(e.target.value)}
            value={sobrenome}
          />

          <Input
            type="text"
            placeholder="Email"
            onChange={(e) => setSignUpEmail(e.target.value)}
            value={signUpEmail}
          />
          <Input
            type="text"
            placeholder="Data de nascimento"
            onChange={(e) => setBirthdayDate(e.target.value)}
            value={birthdayDate}
          />
          <Input
            type="text"
            placeholder="CEP"
            onChange={(e) => setCep(e.target.value)}
            value={cep}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />

          <div className={styles.buttonsDiv}>
            <Button
              label="Cadastrar"
              backgroundColor="#51E54F"
              width="20rem"
              height="3rem"
              onClick={handleSignUp}
            />
            <span className={styles.span}>OU</span>
            <Button
              label="Entrar"
              backgroundColor="#195C18"
              width="20rem"
              height="3rem"
              onClick={() => router.push('/login')} // Redirecionamento para login
            />
          </div>
        </div>
      </section>
    </main>
  );
}
