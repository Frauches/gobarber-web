import React, { createContext, useCallback, useState } from 'react';
import api from './../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const { data } = await api.post<{ token: string; user: object }>(
      '/sessions',
      { email, password },
    );

    localStorage.setItem('@GoBarber:token', data.token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(data.user));

    setData({ token: data.token, user: data.user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };

