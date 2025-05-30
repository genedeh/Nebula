import Icon from '@/assets/icons';
import ScreenWrapper from '@/components/ScreenWrapper';
import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';

const SignUp = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const usernameRef = useRef("");
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Sign Up', "Please fill all the fields!")
            return;
        }
    }

    return (
        <ScreenWrapper>
            <StatusBar barStyle="dark-content" />
            <View className='flex-1 gap-[45px] px-[5%]'>
                <BackButton router={router} />
                <View>
                    <Text className='text-5xl font-bold text-dark'>Let's,</Text>
                    <Text className='text-5xl font-bold text-dark'>Get Started</Text>
                </View>
                <View className='gap-[25px]'>
                    <Text className='text-xl text-dark'>Please enter your details to create a new account</Text>
                    <Input icon={<Icon name="mail" strokeWidth={1.6} size={26} />}
                        placeholder="Enter your Email"
                        onChangeText={(value: string) => { emailRef.current = value }}
                    />
                    <Input icon={<Icon name="mail" strokeWidth={1.6} size={26} />}
                        placeholder="Enter your Username"
                        onChangeText={(value: string) => { usernameRef.current = value }}
                    />
                    <Input icon={<Icon name="lock" strokeWidth={1.6} size={26} />}
                        placeholder="Enter your Passowrd"
                        secureTextEntry
                        onChangeText={(value: string) => { passwordRef.current = value }}
                    />
                    
                    <Button title='Sign Up' loading={loading} onPress={() => onSubmit()} />
                </View>
                <View className='flex-row justify-center items-center gap-[5px]'>
                    <Text>
                        Already have an account!
                    </Text>
                    <TouchableOpacity onPress={() => { router.push('/Login') }}>
                        <Text className='text-primaryDark font-semibold'>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default SignUp;