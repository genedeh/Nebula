import ScreenWrapper from '@/components/ScreenWrapper'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import React from 'react'
import { Alert, Button, Text } from 'react-native'

const home = () => {
    const { user } = useAuth();
    const onLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            Alert.alert('Logout', "Error signing out!")
        }
    }
    return (
        <ScreenWrapper>
            <Text>home</Text>
            <Button title='logout' onPress={() => onLogout()} />
        </ScreenWrapper>
    )
}

export default home