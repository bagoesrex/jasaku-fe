import { useAuthContext } from "../providers/auth-provider";

export function useAuth() {
  const { user, isLoading } = useAuthContext();

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
}
