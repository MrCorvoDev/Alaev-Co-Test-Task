import {
   createContext,
   Dispatch,
   PropsWithChildren,
   SetStateAction,
   useState,
} from 'react';

interface AuthContextType {
   token: string | null;
   setToken: Dispatch<SetStateAction<string | null>>;
}
export const AuthContext = createContext({} as AuthContextType);

const AuthProvider = ({children}: PropsWithChildren) => {
   const [token, setToken] = useState<string | null>(null);

   return (
      <AuthContext.Provider value={{token, setToken}}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
