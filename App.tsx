import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UserScreen from 'screens/UserScreen';
import TripScreen from 'screens/TripScreen';
import TripPreferencesScreen from 'screens/TripPreferencesScreen';
import ItineraryScreen from 'screens/ItineraryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="LoginScreen" // If you dont register this prop, the first screen will be the initial route
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TripScreen" component={TripScreen} />
        <Stack.Screen name="TripPreferencesScreen" component={TripPreferencesScreen} />
        <Stack.Screen name="ItineraryScreen" component={ItineraryScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
