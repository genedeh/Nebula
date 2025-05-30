import Icon from '@/assets/icons/index';
import { Router } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const BackButton = ({ size = 26, router }: { size?: number, router: Router }) => {
    return (
        <TouchableOpacity onPress={() => router.back()} className='self-start p-[5px] rounded-lg bg-text'>
            <Icon name="arrowLeft" strokeWidth={2.5} size={size} color="#121212" />
        </TouchableOpacity>
    )
}

export default BackButton