import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'

const { width, height } = Dimensions.get("window")

interface CustomBtnProps {
  btnWidth?: number,
  btnHeight?: number,
  borderRadius?: number,
  borderWidth?: number,
  borderColor?: string,
  backgroundColor?: string,
  elevation?: number,
  fontSize?: number,
  color?: string,
  text?: string,
  fontWeight?: string | number,
  onPress?: () => void
}

const CustomBtn = ({
  btnWidth = 0.9,
  btnHeight = 0.075,
  borderRadius = 30,
  borderWidth,
  borderColor,
  backgroundColor,
  elevation,
  fontSize = 16,
  color = "#fff",
  text,
  onPress
}: CustomBtnProps) => {


  return (
    <Pressable
      style={({ pressed }) => [
        {
          width: width * btnWidth,
          height: height * btnHeight,
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          borderColor: borderColor,
          backgroundColor: pressed ? '#d6d6d6' : backgroundColor,
          elevation: elevation
        },
        styles.btnBox
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          {
            fontSize: scale(fontSize),
            color: color,
          },
          styles.btnText
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}

export default CustomBtn


const styles = StyleSheet.create({
  btnBox: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  btnText: {
    fontWeight: '500'
  }
})
