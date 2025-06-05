import Icon from '@/assets/icons'
import ScreenWrapper from '@/components/ScreenWrapper'
import Avatar from '@/components/ui/Avatar'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const home = () => {
    const { user } = useAuth();
    const router = useRouter();

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
                        <Avatar uri={user?.profile_picture} rounded='lg' />
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default home