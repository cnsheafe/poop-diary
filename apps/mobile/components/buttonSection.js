import {View, StyleSheet} from "react-native"
import {IconButton} from "./button"

export const ButtonGroup = ({buttons, onPress}) => {
  return (
    <View style={styles.container}>
      {buttons.map(({Icon, text}, index) => {
        const ButtonComponent = IconButton(Icon);
        return <ButtonComponent key={`button-section-${index}`} text={text} onPress={onPress} />
      }
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
