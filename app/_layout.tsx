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
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session?.user)
        userUpdateData(session?.user)
        router.replace('/home');
      } else {
        // @ts-ignore
        setAuth(null);
        router.replace('/Welcome')
      }
    })
  }, []);
  const userUpdateData = async (user: User) => {
    const response = await getUserData(user?.id);
    if (response.success) {
      setUserData(response?.data)
    }
  }
  return <Stack
    screenOptions={{
      headerShown: false
    }}
  />;
}

export default _layout
