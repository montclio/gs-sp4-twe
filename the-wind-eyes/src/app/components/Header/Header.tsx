import styles from "./page.module.css";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { Button } from "../Button/Button";

export const Header = () => {
  const menuItems = [
    { label: "Ranking verde", type: "text" },
    { label: "Sobre nós", type: "text" },
    { label: "Entrar", type: "button", variant: "outline", borderColor: "#195C18", color: "#195C18", size: "large" },
    { label: "Cadastrar", type: "button", backgroundColor: "#195C18", color: "#fff", size: "large" }
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Image src={logo} alt="Logo" width={70} height={70} />
        <ul className={styles.ul}>
          {menuItems.map((item, index) => (
            <li className={styles.StyledLi} key={index}>
              {item.type === "button" ? (
                <Button
                  label={item.label}
                  variant={item.variant}
                  borderColor={item.borderColor}
                  color={item.color}
                  backgroundColor={item.backgroundColor}
                  size={item.size}
                />
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
