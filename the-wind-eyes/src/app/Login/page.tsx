import { Button } from "../components/Button/Button";
import Input from "../components/Input/Input";
import styles from "./page.module.css";

export default function Login() {
  return (
      
    <main className={styles.main}>
      <section className={styles.loginCenter}>
        <div className={styles.divForms}>
          <h1 className={styles.tittle}>ENTRAR</h1>

          <Input 
          type="text"
          placeholder="Email"/>

          <Input 
          type="password"
          placeholder="Senha"/>

          <div className={styles.buttonsDiv}>
            <Button
              label="Entrar"
              backgroundColor="#51E54F"
              width="20rem"
              height="3rem"
              />
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
