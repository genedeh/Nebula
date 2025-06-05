import Icon from '@/assets/icons'
import ScreenWrapper from '@/components/ScreenWrapper'
import Avatar from '@/components/ui/Avatar'
import Header from '@/components/ui/Header'
import { useAuth, User } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { Router, useRouter } from 'expo-router'
import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'


const profile = () => {
    const { user } = useAuth();
    const router = useRouter();
    const onLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            Alert.alert('Logout', "Error signing out!")
        }
    }
    const handleLogout = () => {
        Alert.alert('Confirm', 'Are you sure you want to logout', [{
            text: 'Cancel',
            onPress: () => { console.log('Modal Cancelled') },
            style: 'cancel'
        }, {
            text: 'Loogut',
            onPress: () => { onLogout() },
            style: 'destructive'
        }])
    }
    return (
        <ScreenWrapper>
            <UserHeader user={user} router={router} handleLogout={handleLogout} />
        </ScreenWrapper>
    )
}

const UserHeader = ({ user, router, handleLogout }: { user: User | null, router: Router, handleLogout: () => void }) => {
    const stats = [
        { label: 'Fans', value: user?.followers || '0' },
        { label: 'Following', value: 'N/A' },
        { label: 'Posts', value: 'N/A' },
        { label: 'Likes', value: user?.total_likes || '0' },
    ];
    return (
        <View className="flex-1 bg-white px-[4%]">
            <View>
                <Header title='Profile' showBackButton={true} />
                <TouchableOpacity className='absolute right-0 p-[5px] rounded-md bg-roseLight' onPress={() => { handleLogout() }}>
                    <Icon name={'logout'} color='#FF5D8F' />
                </TouchableOpacity>
            </View>
            <View className="relative items-center justify-center mt-5">
                {/* Profile Picture */}
                <Avatar uri={user?.profile_picture} size={35} />
                <TouchableOpacity className="absolute bottom-0 right-safe-offset-28 bg-white p-2 rounded-full shadow-md elevation-5" onPress={() => { router.push('/(main)/editProfile') }}>
                    <Icon name="edit" size={18} color="#000" />
                </TouchableOpacity>
            </View>
            {/* Name, Username, Location */}
            <View className="items-center my-3">
                <Text className="text-2xl font-bold text-black">{user?.username || 'N/A'}</Text>
                <Text className="text-sm text-gray-500">{user?.email || 'N/A'}</Text>
                <Text className="text-xs text-gray-400"> {user?.location || 'N/A'}</Text>

            </View>
            {/* Stats Row */}
            <View className="flex-row justify-between items-center m-5 w-[90%]">
                {stats.map((item, index) => (
                    <View
                        key={index}
                        className={`flex-1 items-center ${index < stats.length - 1 ? 'border-r border-gray-200' : ''}`}
                    >
                        <Text className="text-sm font-semibold text-black">{item.value}</Text>
                        <Text className="text-xs text-gray-500">{item.label}</Text>
                    </View>
                ))}
            </View>
            <View className='gap-[10px] px-6'>
                {user?.phone_number &&
                    <View className='items-center justify-start flex-row gap-[10px]'>
                        <Icon name={'call'} size={20} color='black' />
                        <Text className='font-semibold text-textLight'>
                            {user?.phone_number || 'N/A'}
                        </Text>
                    </View>
                }
                {user?.bio &&
                    <Text className='font-semibold text-textLight'>
                        {user?.bio || 'N/A'}
                    </Text>
                }
            </View>
        </View >
    )
}

export default profile