import ScreenWrapper from '@/components/ScreenWrapper';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text } from 'react-native';

const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title='Welcome' onPress={() => router.push('/Welcome')} />
    </ScreenWrapper>
  )
}

export default index