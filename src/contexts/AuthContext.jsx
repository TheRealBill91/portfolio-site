import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [authStatusError, setAuthStatusError] = useState(null);

  useEffect(() => {
    async function checkAuthStatus() {
      try {
        const response = await fetch(
          "http://localhost:3000/client/users/authstatus",
          {
            mode: "cors",
            method: "GET",
            credentials: "include",
          }
        );
        if (!response.ok) throw new Error("Problem checking auth status");

        setAuth(true);
      } catch (error) {
        setAuthStatusError(error);
      }
    }
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, authStatusError }}>
      {children}
    </AuthContext.Provider>
  );
}
