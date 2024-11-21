import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  email: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState<string | null>(null); // Armazenando o e-mail

  const login = (username: string, password: string) => {
    // Aqui você pode fazer a validação do usuário e senha (futuramente, por exemplo, com uma API)
    setIsAuthenticated(true);
    setEmail(username); // Considerando o "username" como o e-mail
  };

  const logout = () => {
    setIsAuthenticated(false);
    setEmail(null); // Limpa o e-mail quando o usuário sair
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
