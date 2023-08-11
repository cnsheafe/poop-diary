import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {AddPoopPage} from './screens/AddPoop/AddPoop';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AddPoopPage />
      </View>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  }
});

