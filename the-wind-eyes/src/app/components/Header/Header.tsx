'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../../../../Context/AuthContext';
import { useRouter } from 'next/navigation'; 
import styles from './page.module.css'; 
import logo from "../../assets/logo.png"; 
import { Button } from '../Button/Button';
import { Url } from 'next/dist/shared/lib/router/router';
import router from 'next/router';

interface MenuItem {
  label: string;
  type: 'text' | 'button';
  href?: string;
  variant?: "outline" | "primary" | "secondary" | undefined;
  borderColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

interface HeaderProps {}

const menuItemsOut: MenuItem[] = [
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

const menuItemsIn: MenuItem[] = [
  { label: "Menu", type: "text", href: "/home" },
  { label: "Conteudo educativo", type: "text", href: "/educational-content" },
  { 
    label: "Quiz", 
    type: "button", 
    href: "/quiz", 
    variant: "outline", 
    borderColor: "#195C18", 
    color: "#195C18", 
    size: "large", 
    onClick: () => router.push("/quiz"), 
  },
  { 
    label: "Perfil", 
    type: "button", 
    href: "/profile", 
    variant: "outline", 
    borderColor: "#195C18", 
    color: "#195C18", 
    size: "large", 
    onClick: () => router.push("/profile"), 
  },
];

export const Header: React.FC<HeaderProps> = () => {
  const { isAuthenticated, logout } = useAuth(); 
  const router = useRouter(); 

  const handleLogout = (): void => {
    logout();
    localStorage.clear(); 
    router.push('/login');  
  };

  const renderButton = (item: MenuItem): JSX.Element => {
    const buttonProps = {
      label: item.label,
      color: item.color || '#fff',  
      size: item.size || 'medium', 
      variant: item.variant || 'primary', 
      backgroundColor: item.backgroundColor, 
      borderColor: item.borderColor,  
      width: item.width, 
      height: item.height,  
    };

    if (item.href) {
      return (
        <Link href={item.href}>
          <Button {...buttonProps} />
        </Link>
      );
    } else {
      return <Button {...buttonProps} onClick={item.onClick} />;
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Image src={logo} alt="Logo" width={70} height={70} className={styles.img} />
        <ul className={styles.ul}>
          {isAuthenticated ? (
            <>
              {menuItemsIn.map((item, index) => (
                <li className={styles.StyledLi} key={index}>
                  {item.type === "button" ? (
                    renderButton(item)  
                  ) : (
                    item.href ? (
                      <Link href={item.href} prefetch={true}>
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )
                  )}
                </li>
              ))}
              <li className={styles.StyledLi}>
                <Button 
                  label='Sair'
                  backgroundColor='#195C18'
                  size='large'
                  onClick={handleLogout}
                >
                  Sair
                </Button>
              </li>
            </>
          ) : (
            <>
              {menuItemsOut.map((item, index) => (
                <li className={styles.StyledLi} key={index}>
                  {item.type === "button" ? (
                    renderButton(item)  
                  ) : (
                    item.href ? (
                      <Link href={item.href} prefetch={true}>
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )
                  )}
                </li>
              ))}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
