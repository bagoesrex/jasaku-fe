"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface User {
  email: string;
  name: string;
  service_type: string;
}

interface AuthContextProps {
  user: User | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch("/api/users/current", { method: "GET" });

        if (!res.ok) {
          setUser(null);
          setIsLoading(false);
          return;
        }

        const json = await res.json();
        setUser(json.user);
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
