import { getUserProfilePictureSource } from '@/services/ImageServices';
import { Image } from "expo-image";
import React from 'react';
import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');


const Avatar = ({ uri, size = 9.3, style = '' }: { uri: string | null | undefined, size?: number, style?: string }) => {
    const imageSize = screenWidth * (size / 100);
    return (
        <Image
            source={getUserProfilePictureSource(uri)}
            className={`border-darkLight border-1 rounded-full bg-textDark/50`}
            transition={100}
            style={{
                width: imageSize,
                height: imageSize,
                borderRadius: imageSize / 2, 
                objectFit: 'cover',          
            }}
        />
    )
}

export default Avatar