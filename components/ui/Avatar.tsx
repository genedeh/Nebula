import { getUserProfilePictureSource } from '@/services/ImageServices';
import { Image } from "react-native";
import React from 'react';

const Avatar = ({ uri, size = '12', style = '' }: { uri: string, size?: string, style?: string }) => {
    return (
        <Image
            source={getUserProfilePictureSource(uri)}
            className={`border-darkLight border-1 h-${size} w-${size} rounded-lg bg-textDark/50`}
            resizeMode="cover" 
            //   @ts-ignore
            style={{ borderCurve: 'continuous' }}
        />
    )
}

export default Avatar