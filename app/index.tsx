import ScreenWrapper from '@/components/ScreenWrapper';
import Loading from '@/components/ui/Loading';
import React from 'react';
import { View } from 'react-native';

const index = () => {
  return (
    <ScreenWrapper>
      <View className="flex-1 items-center justify-center">
        <Loading />
      </View>
    </ScreenWrapper>
  )
}

export default index