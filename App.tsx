import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/sign/LoginScreen';
import HomeScreen from './screens/central/HomeScreen';
import UserScreen from 'screens/central/UserScreen';
import TripScreen from 'screens/gestor/TripScreen';
import TripPreferencesScreen from 'screens/gestor/TripPreferencesScreen';
import ItineraryScreen from 'screens/central/ItineraryScreen';
import ShareAndCollaboratorsScreen from 'screens/gestor/ShareAndCollaboratorsScreen';
import ShareLinkScreenFun from 'screens/gestor/ShareScreen';

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
        <Stack.Screen name="ShareAndCollaboratorsScreen" component={ShareAndCollaboratorsScreen} />
        <Stack.Screen name="TripPreferencesScreen" component={TripPreferencesScreen} />
        <Stack.Screen name="ShareScreen" component={ShareLinkScreenFun} />
        <Stack.Screen name="ItineraryScreen" component={ItineraryScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
