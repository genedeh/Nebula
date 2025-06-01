import { createContext, ReactNode, useContext, useState } from "react";

export interface User{
    id: string | undefined;
    username: string;
    email: string;
    followers: number;
    total_likes: number;
    address: string | null;
    bio: string | null;
    profile_picture: string | null | undefined;
    phone_number: string | null;
}


interface AuthContextType {
    user: User | null;
    setAuth: (authUser: User) => void;
    setUserData: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const setAuth = (authUser: User | null) => {
        setUser(authUser);
    };

    const setUserData = (userData: Partial<User>) => {
        //@ts-ignore
        setUser({ ...userData});
    };

    return (
        <AuthContext.Provider value={{ user, setAuth, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
