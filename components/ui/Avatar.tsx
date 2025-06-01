import { getUserProfilePictureSource } from '@/services/ImageServices';
import { Image } from "expo-image";
import { Dimensions } from 'react-native';
import React from 'react';

const { width: screenWidth } = Dimensions.get('window');


const Avatar = ({ uri, size = 9.3, style = '' }: { uri: string | null | undefined, size?: number, style?: string }) => {
    const imageSize = screenWidth * (size / 100); 
    return (
        <Image
            source={getUserProfilePictureSource(uri)}
            className={`border-darkLight border-1  rounded-full bg-textDark/50`}
            transition={100}
            style={{
                width: imageSize,
                height: imageSize,
                // @ts-ignore
                borderCurve: 'continuous',
            }}
        />
    )
}

export default Avatar