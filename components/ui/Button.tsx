import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Loading from './Loading';

const Button =
    ({ buttonStyle, textStyle, title = '', onPress = () => { }, loading = true, hasShadow = false }:
        { buttonStyle?: string, textStyle?: string, title?: string, onPress: () => void, loading?: boolean, hasShadow?: boolean }) => {
        const shadowStyle = 'shadow-dark elevation-2xl shadow-lg';
        if (loading) {
            return (
                <View className={`bg-white h-20 justify-center items-center rounded-3xl ${buttonStyle} `} style={{ borderCurve: 'continuous' }}>
                    <Loading />
                </View>
            )
        }
        return (
            <TouchableOpacity
                onPress={onPress}
                className={`bg-primary h-20 justify-center items-center rounded-3xl ${buttonStyle} ${hasShadow && shadowStyle}`}
                style={{ borderCurve: 'continuous' }}
            >
                <Text className={`text-2xl text-white font-extrabold${textStyle}`}>{title}</Text>
            </TouchableOpacity>
        )
    }

export default Button