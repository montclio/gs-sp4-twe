'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../../../../Context/AuthContext';
import { useRouter } from 'next/navigation'; 
import styles from './page.module.css'; 
import logo from "../../assets/logo.png"; 
import { Button } from '../Button/Button';

const menuItemsOut = [
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

const menuItemsIn = [
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

export const Header = () => {
  const { isAuthenticated, logout } = useAuth(); 
  const router = useRouter(); 

  const handleLogout = () => {
    logout();
    localStorage.clear(); 
    router.push('/login');  
  };

  const renderButton = (item) => {
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
      
          <Image src={logo} alt="Logo" width={70} height={70} className={styles.img}/>
        
        <ul className={styles.ul}>
        {isAuthenticated ? (
  <>
    {menuItemsIn.map((item, index) => (
      <li className={styles.StyledLi} key={index}>
        {item.type === "button" ? (
          renderButton(item)  
        ) : (
          <Link href={item.href} prefetch={true}>
            <span>{item.label}</span>
          </Link>
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
          <Link href={item.href} prefetch={true}>
            <span>{item.label}</span>
          </Link>
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
