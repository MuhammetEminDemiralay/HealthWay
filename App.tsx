import { StatusBar, StatusBarProps } from 'expo-status-bar';
import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/navigation/rootNavigation';

const { width, height } = Dimensions.get("screen")

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='skyblue' style='light' translucent={false} hidden={false} />
      <RootNavigation />
    </SafeAreaView>
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
