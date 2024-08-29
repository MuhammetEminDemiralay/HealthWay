import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, } from 'react-native';
import RootNavigation from './src/navigation/rootNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const { width, height } = Dimensions.get("screen")

export default function App() {

  return (
    <Provider store={store}>
      <StatusBar backgroundColor='#000000' style='light' translucent={false} hidden={false} />
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  box: {
    width: width,
    height: height * 0.98,
    borderWidth: 1,
  }



});
