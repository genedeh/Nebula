import Icon from '@/assets/icons'
import ScreenWrapper from '@/components/ScreenWrapper'
import Button from '@/components/ui/Button'
import Header from '@/components/ui/Header'
import Input from '@/components/ui/Input'
import { useAuth } from '@/contexts/AuthContext'
import { getUserProfilePictureSource, uploadFile } from '@/services/ImageServices'
import { updateUserData } from '@/services/UserService'
import { Image } from 'expo-image'
import * as ImagePicker from 'expo-image-picker'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native'


const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth * 0.45;

const editProfile = () => {
    const { user, setUserData } = useAuth();
    const router = useRouter();
    const [editedUser, setEditedUser] = useState({
        username: '',
        phone_number: '',
        profile_picture: null,
        bio: '',
        location: ''
    })
    const [loading, setLoading] = useState(false);

    const onsubmit = async () => {
        const userData = { ...editedUser }
        const { username, phone_number, bio, location, profile_picture } = userData;
        if (!username || !phone_number || !bio || !location || !profile_picture) {
            Alert.alert('Edit Profile', "Please fill all the fields");
            return;
        }
        setLoading(true)
        if (typeof profile_picture == 'object') {
            //@ts-ignore
            const imageResponse = await uploadFile('profiles', profile_picture?.uri, true);
            if (imageResponse.success) {
                // @ts-ignore
                userData.profile_picture = imageResponse.data
            } else {
                userData.profile_picture = null
            }
       }

        const response = await updateUserData(user?.id, userData)
        if (response?.success) {
            setUserData({ ...user, ...userData })
            router.back();
        }
        setLoading(false);
    }

    useEffect(() => {
        if (user) {
            setEditedUser({
                username: user.username,
                phone_number: user.phone_number || '',
                // @ts-ignore
                profile_picture: user.profile_picture || null,
                bio: user.bio || '',
                location: user.location || ''
            });
        }
    }, [user])
    //@ts-ignore
    const imageSource = editedUser.profile_picture && typeof editedUser.profile_picture == 'object' ? editedUser.profile_picture.uri : getUserProfilePictureSource(editedUser?.profile_picture);
    const onPickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.7,
        });
        if (!result.canceled) {
            //@ts-ignore
            setEditedUser({ ...editedUser, profile_picture: result.assets[0] })
        }
    }
    return (
        <ScreenWrapper>
            <View className='flex-1 px-[4%]'>
                <ScrollView className='flex-1' showsVerticalScrollIndicator={false} snapToAlignment='end'>
                    <Header title='Edit Profile' showBackButton={true} />
                    <View className='gap-[10px] mt-[20px]'>
                        <View className="relative items-center justify-center">
                            <Image source={imageSource} className='rounded-full border-1 border-darkLight' style={{
                                width: imageSize,
                                height: imageSize,
                                borderRadius: imageSize / 2,
                                objectFit: 'cover',        
                                // @ts-ignore
                                borderCurve: 'continuous'
                            }} />
                            <TouchableOpacity className="absolute bottom-0 right-safe-offset-28 bg-white p-2 rounded-full shadow-md elevation-5" onPress={() => { onPickImage() }}>
                                <Icon name={'camera'} size={20} strokeWidth={2.5} />
                            </TouchableOpacity>
                        </View>
                        <Text className='text-xl text-textLight'>
                            Please fill your profile details
                        </Text>
                        <Input
                            icon={<Icon name={'user'} />}
                            placeholder='Enter your username'
                            value={editedUser.username}
                            onChangeText={(value: string) => { setEditedUser({ ...editedUser, username: value }) }}
                        />
                        <Input
                            icon={<Icon name={'call'} />}
                            placeholder='Enter your phone number'
                            value={editedUser.phone_number}
                            onChangeText={(value: string) => { setEditedUser({ ...editedUser, phone_number: value }) }}
                        />
                        <Input
                            icon={<Icon name={'location'} />}
                            placeholder='Enter your address'
                            value={editedUser.location}
                            onChangeText={(value: string) => { setEditedUser({ ...editedUser, location: value }) }}
                        />
                        <Input
                            placeholder='Enter your bio'
                            value={editedUser.bio}
                            multiline={true}
                            containerStyles='flex-row h-[15%] items-start py-[15px]'
                            onChangeText={(value: string) => { setEditedUser({ ...editedUser, bio: value }) }}
                        />
                        <Button title='Update' loading={loading} onPress={() => { onsubmit() }} />
                    </View>
                </ScrollView>
            </View>
        </ScreenWrapper>
    )
}

export default editProfile