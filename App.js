import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen.js';
import GetNews from './src/Screens/GetNews';
import WebViewComponent from './src/components/WebView.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Trending" component={HomeScreen} />
      <Stack.Screen name='GetNews' component={GetNews} />
      <Stack.Screen name='View' component={WebViewComponent} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
