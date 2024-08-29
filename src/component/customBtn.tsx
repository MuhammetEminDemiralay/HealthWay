import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'

const { width, height } = Dimensions.get("window")

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
  fontWeight = "500",
  onPress
}: any) => {


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
            fontWeight: fontWeight
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
