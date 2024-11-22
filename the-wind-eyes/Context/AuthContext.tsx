import React, { createContext, useContext, useState } from 'react';

<<<<<<< HEAD
type User = {
  nome: string;
  sobrenome: string;
  email: string;
  dataDeNascimento?: string; 
  cep?: string; 
};

=======
interface User {
  nome: string;
  email: string;
}
>>>>>>> 2796b7abe4736e76b10b1ee12bc622250b204ad2

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
<<<<<<< HEAD
  login: (user: User) => void; // Alterado para aceitar um objeto de usuári
=======
  login: (user: User) => void; // Alterado para aceitar um objeto de usuário
>>>>>>> 2796b7abe4736e76b10b1ee12bc622250b204ad2
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setIsAuthenticated(true);
    setUser(user); // Armazenando o objeto do usuário
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Limpando os dados do usuário ao fazer logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
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
