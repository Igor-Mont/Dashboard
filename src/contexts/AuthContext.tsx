import { createContext, ReactNode, useState } from "react";


type AuthProps = {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

type ProviderProps = {
  children: ReactNode;
}

const AuthContext = createContext<AuthProps>({} as AuthProps);

function AuthContextProvider({ children }: ProviderProps): JSX.Element {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('logged');

    return !!isLogged;
  });

const signIn = (email: string, password: string) => {
    if(email === 'igor@gmail.com' && password === '123'){
        localStorage.setItem('logged', 'true');
        setLogged(true);
    }else{
        alert('Senha ou usuário inválidos!');
    }
}

const signOut = () => {
    localStorage.removeItem('logged');
    setLogged(false);
}

return (
    <AuthContext.Provider value={{logged, signIn, signOut}}>
        {children}
    </AuthContext.Provider>
);
}

export { AuthContext, AuthContextProvider };