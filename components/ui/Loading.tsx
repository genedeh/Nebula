import { View, Text, ActivityIndicator, ColorValue } from 'react-native'
import React from 'react'

const Loading = ({size="large", color="purple"}: {size?: number | "large" | "small" | undefined, color?: ColorValue | undefined}) => {
  return (
      <View className='justify-center items-center'>
          <ActivityIndicator
              size={size}
              color={color}
          />
    </View>
  )
}

export default Loading