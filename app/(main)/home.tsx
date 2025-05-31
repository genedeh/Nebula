import Icon from '@/assets/icons'
import ScreenWrapper from '@/components/ScreenWrapper'
import Avatar from '@/components/ui/Avatar'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'expo-router'
import React from 'react'
import { Alert, Button, Text, TouchableOpacity, View } from 'react-native'

const home = () => {
    const { user } = useAuth();
    const router = useRouter();
    const onLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            Alert.alert('Logout', "Error signing out!")
        }
    }
    return (
        <ScreenWrapper>
            <View className='flex-row items-center justify-between mb-[10px] mx-[4%]'>
                <View className='flex-row items-center justify-between mb-[10px] mx-[4%]'>
                    <Text className='text-primaryDark text-4xl font-bold'>Nebula</Text>
                </View>
                <View className='flex-row items-center justify-center gap-[18px]'>
                    <TouchableOpacity onPress={() => { router.push('/(main)/notifications') }}>
                        <Icon name={'heart'} size={25} strokeWidth={2.3} color={'purple'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { router.push('/(main)/newPost') }}>
                        <Icon name={'plus'} size={25} strokeWidth={2.3} color={'purple'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { router.push('/(main)/profile') }}>
                        {/* @ts-ignore */}
                        <Avatar uri={user?.profile_picture} rounded='sm' />
                    </TouchableOpacity>
                </View>
            </View>

            <Button title='logout' onPress={() => onLogout()} />
        </ScreenWrapper>
    )
}

export default home