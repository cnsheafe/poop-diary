import {StyleSheet, Pressable, Text} from 'react-native';
import Poop from '../assets/poop-solid.svg'

export const Button = ({onPress, children}) => {
  return (
    <Pressable style={buttonStyles.button} onPress={onPress}>
      {children}
    </Pressable>
  )
}

export const PoopIcon = ({iconStyle = {width: 50, height: 50, fill: '#ffffff'}}) => {
  return (
    <Poop width={iconStyle.width} height={iconStyle.height} fill={iconStyle.fill} />
  )
}

export const IconButton = (Icon) => ({onPress, text, iconStyle = {width: 50, height: 50, fill: '#ffffff'}}) => {
  return (
    <Button onPress={onPress}>
      <Icon {...iconStyle} />
      {text && <Text>{text}</Text>}
    </Button>
  )
}

export const PoopButton = IconButton(PoopIcon) 

const buttonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 50
  },
})
