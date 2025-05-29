import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children, bg }: { children: React.ReactNode, bg: string }) => {
    const insets = useSafeAreaInsets();
    const paddingTop = insets.top > 0 ? insets.top + 5 : 30;
    return (
        <View style={{flex: 1, paddingTop, backgroundColor: bg}}>
            {
                children
            }
        </View>
    )
}

export default ScreenWrapper