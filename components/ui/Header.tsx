import { useRouter } from 'expo-router';
import React from 'react';
import { View , Text} from 'react-native';
import BackButton from './BackButton';

const Header = ({ title = 'Header', showBackButton = false, mb = '10' }: { title?: string, showBackButton?: boolean, mb?: string }) => {
    const router = useRouter();
    return (
        <View className={`flex-row justify-center items-center mt-[5px] gap-[10px]  mb-${mb}`}>
            {showBackButton &&
                <View className='absolute left-0'>
                    <BackButton router={router} />
                </View>
            }
            <Text className='text-2xl text-dark font-semibold'>{title}</Text>
        </View>
    )
}

export default Header