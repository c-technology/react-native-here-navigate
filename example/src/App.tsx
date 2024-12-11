import { HomeScreen, PolylineScreen, RoutesScreen } from '@/features';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationScreen from './features/navigation/NavigationScreen';
import type { ScreenParams } from './navigation';

const Stack = createNativeStackNavigator<ScreenParams>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Routes" component={RoutesScreen} />
          <Stack.Screen name="Polyline" component={PolylineScreen} />
          <Stack.Screen name="Navigation" component={NavigationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
