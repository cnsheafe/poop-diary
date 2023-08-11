import {View, Text, SectionList, SafeAreaView, StyleSheet} from 'react-native'
import {IconButton, PoopIcon} from '../../components/button'
import {ButtonGroup} from '../../components/buttonSection'

const sizes = [{
  type: 'small',
  text: 'small',
  Icon: PoopIcon
}, {
  type: 'medium',
  text: 'medium',
  Icon: PoopIcon
}, {
  type: 'large',
  text: 'large',
  Icon: PoopIcon
}]

const consistency = [{
  type: 'runny',
  text: 'runny',
  Icon: PoopIcon
}, {
  type: 'soft',
  text: 'soft',
  Icon: PoopIcon
}, {
  type: 'solid',
  text: 'solid',
  Icon: PoopIcon
}, {
  type: 'hard',
  text: 'hard',
  Icon: PoopIcon
}]

const sections = [{
  title: 'Size',
  data: [sizes],
}, {
  title: 'Consistency',
  data: [consistency],
}]

export const AddPoopPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={({item, section}) => {
          return (
            <View style={styles.section}>
              <Text style={styles.sectionText}>{section.title}</Text>
              <ButtonGroup buttons={item} />
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionText: {
    textAlign: 'center'
  }
})
