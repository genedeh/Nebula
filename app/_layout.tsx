import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { getUserData } from "@/services/UserService";
import { User } from "@supabase/supabase-js";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import './globals.css';

const _layout = () => {
  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  )
}

const RootLayout = () => {
  const router = useRouter();
  // @ts-ignore
  const { setAuth, setUserData } = useAuth();
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        // @ts-ignore
        setAuth(session?.user)
        await userUpdateData(session?.user, session?.user.email)
        router.replace('/(main)/home');
      } else {
        // @ts-ignore
        setAuth(null);
        router.replace('/Welcome')
      }
    })
  }, []);
  const userUpdateData = async (user: User, email: string | undefined) => {
    const response = await getUserData(user?.id);
    if (response.success) {
      setUserData({ ...response?.data, email })
    }
  }
  return <Stack
    screenOptions={{
      headerShown: false
    }}
  />;
}

export default _layout
