import styles from "./page.module.css";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { Button } from "../Button/Button";
import Link from "next/link";

export const Header = () => {
  const menuItems = [
    { label: "Ranking verde", type: "text", href: "/ranking-green-companies" },
    { label: "Sobre nós", type: "text", href: "/about" },
    { 
      label: "Entrar", 
      type: "button", 
      href: "/login", 
      variant: "outline", 
      borderColor: "#195C18", 
      color: "#195C18", 
      size: "large" 
    },
    { 
      label: "Cadastrar", 
      type: "button", 
      href: "/sign-up", 
      backgroundColor: "#195C18", 
      color: "#fff", 
      size: "large" 
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={70} height={70} />
        </Link>
        <ul className={styles.ul}>
          {menuItems.map((item, index) => (
            <li className={styles.StyledLi} key={index}>
              {item.type === "button" ? (
                <Link href={item.href}>
                  <Button
                    label={item.label}
                    variant={item.variant}
                    borderColor={item.borderColor}
                    color={item.color}
                    backgroundColor={item.backgroundColor}
                    size={item.size}
                  />
                </Link>
              ) : (
                <Link href={item.href}>
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
