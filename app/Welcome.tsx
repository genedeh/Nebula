import ScreenWrapper from '@/components/ScreenWrapper'
import Button from '@/components/ui/Button'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg='white'>
      <StatusBar barStyle='dark-content' />
      <View className="flex-1 items-center justify-around bg-white px-[4%]" >
        <View className="items-center justify-center">
          <Image source={images.welcome} resizeMode='contain' className='h-[55%] w-fit' />
        </View>
        <View className="gap-5">
          <Text className='text-primaryDark text-4xl text-center font-extrabold'>Nebula</Text>
          <Text className='text-center px-[10%] text-xl text-dark'>Where Connections Shine Beyond the Stars.</Text>
        </View>
        <View className='gap-30 w-[100%] m-10'>
          <Button title='Getting Started' buttonStyle='mx-[3%] mb-[4%]' onPress={() => {router.push('/SignUp') }} />
          <View className='flex-row justify-center items-center gap-2'>
            <Text className='text-center text-dark text-xl'>
              Already have an Account!
            </Text>
            <TouchableOpacity onPress={()=> {router.push('/Login')}}>
              <Text className='text-center text-primaryDark text-xl font-semibold'>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome
