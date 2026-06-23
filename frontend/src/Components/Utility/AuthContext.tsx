import { createContext, useContext, useState } from "react";

type User = { // holds the user's values
    email: string;
    password: string;
} | null;

type AuthContextType = { // Holds the user's authentication related values and functions
    user: User; // the assosiated user
    login: (email: string, password: string) => void;
    logout: () => void;
    register: (fullname: string, email: string, password: string, phoneNum: string, DoB: string) => void;
    isAuthenticated: boolean; // is that user authenticated
};

const AuthContext = createContext<AuthContextType | null>(null); // makes one empty "box", is later filled by the AuthProvider

export function AuthProvider({ children }: { children: React.ReactNode}) {
    const[user, setUser] = useState<User>(null); // is used to adjust the user's value for that state; user holds the value, setUser adjusts it

    const login = (email: string, password: string) => { // is called when the user logs in, and sets the user's email and password
        setUser({email, password});
    };

    const logout = () => { // nullifies the user's values
        setUser(null)
    };

    const register = (
        fullname: string,
        email: string,
        password: string,
        phoneNum: string,
        DoB: string,
    ) => {
        setUser({email, password}); // simulates registration by setting the user
    };

    const isAuthenticated = !!user; // if the user is null (aka logged out - it aint authenticated)

    return ( // returns markup
        <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated}} >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() { // reads the AuthContext's values
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error("Error reading user state");
    }
    return context;
}
