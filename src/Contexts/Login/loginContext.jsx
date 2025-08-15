import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext(); // ❗ Eksik olan `export` eklendi

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [userId] = useState('userid=ps-121321');

    return (
        <AuthContext.Provider value={{ userId }}>
            {children}
        </AuthContext.Provider>
    );
};
