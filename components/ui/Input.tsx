import React from 'react'
import { TextInput, View } from 'react-native'

// @ts-ignore 
const Input = (props) => {
    return (
        <View className={`flex-row items-center justify-center rounded-[28px] px-[24px] gap-[16px] border-[0.6px] 
    border-textLight 
    h-[60px]
    bg-darkLightborder-textLight
         ${props.containerStyles && props.containerStyles}`} style={{borderCurve: 'continuous'}}>
            {
                props.icon && props.icon
            }
            <TextInput className="flex-1 text-dark text-base font-medium" placeholderTextColor='#B0B0C3' ref={props.inputRef && props.inputRef} {...props} />
        </View>
    )
}

export default Input