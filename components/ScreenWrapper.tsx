import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children, bg = "white" }: { children: React.ReactNode, bg: string }) => {
    const insets = useSafeAreaInsets();
    const paddingTop = insets.top > 0 ? insets.top + 5 : 30;
    return (
        <View className="flex-1" style={{ paddingTop, backgroundColor: bg }}>
            {
                children
            }
        </View>
    )
}

export default ScreenWrapper