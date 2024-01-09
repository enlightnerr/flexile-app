import { createContext, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
