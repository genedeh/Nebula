import Icon from '@/assets/icons';
import ScreenWrapper from '@/components/ScreenWrapper';
import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Login', "Please fill all the fields!")
            return;
        }
    }

    return (
        <ScreenWrapper>
            <StatusBar barStyle="dark-content" />
            <View className='flex-1 gap-[45px] px-[5%]'>
                <BackButton router={router} />
                <View>
                    <Text className='text-5xl font-bold text-dark'>Hey,</Text>
                    <Text className='text-5xl font-bold text-dark'>Welcome Back</Text>
                </View>
                <View className='gap-[25px]'>
                    <Text className='text-xl text-dark'>Please login to continue</Text>
                    <Input icon={<Icon name="mail" strokeWidth={1.6} size={26} />}
                        placeholder="Enter your Email"
                        onChangeText={(value: string) => { emailRef.current = value }}
                    />
                    <Input icon={<Icon name="lock" strokeWidth={1.6} size={26} />}
                        placeholder="Enter your Passowrd"
                        secureTextEntry
                        onChangeText={(value: string) => { passwordRef.current = value }}
                    />
                    <Text className='text-right fonrt-semibold text-dark'>
                        Forgot Password?
                    </Text>
                    <Button title='Login' loading={loading} onPress={() => onSubmit()} />
                </View>
                <View className='flex-row justify-center items-center gap-[5px]'>
                    <Text>
                        Don't have an Account?
                    </Text>
                    <TouchableOpacity onPress={() => router.push("/SignUp")}>
                        <Text className='text-primaryDark font-semibold'>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Login;