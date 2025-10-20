import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';
import TripScreen from 'screens/TripScreen';
import TripPreferencesScreen from 'screens/TripPreferencesScreen';
import ItineraryScreen from 'screens/ItineraryScreen';

export default function App() {
  return (
    <>
      {/* <ScreenContent title="Home" path="App.tsx"></ScreenContent> */}
      {/* <LoginScreen></LoginScreen> */}
      {/* <HomeScreen/> */}
      {/* <TripScreen/> */}
      {/* <TripPreferencesScreen/> */}
      <LoginScreen/>
      <StatusBar style="auto" />
    </>
  );
}
