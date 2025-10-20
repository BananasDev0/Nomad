import React, { useState } from "react";
import { View, Text, TextInput, Switch, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function TripScreen() {
  const navigation = useNavigation<any>();
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [travelByPlane, setTravelByPlane] = useState(false);
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [showArrivalPicker, setShowArrivalPicker] = useState(false);
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [stayPlace, setStayPlace] = useState("");

  const handleArrivalConfirm = (date: Date) => {
    setArrivalDate(date);
    setShowArrivalPicker(false);
  };

  const handleDepartureConfirm = (date: Date) => {
    setDepartureDate(date);
    setShowDeparturePicker(false);
  };

  const sendToTripPreferencesScreen = () => {
    navigation.navigate("TripPreferencesScreen");
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f6f7f8] dark:bg-[#101c22] px-5 py-6">
      <Text className="text-2xl font-bold text-center text-[#7b3aed] mb-6">
        Create Your Trip ✈️
      </Text>

      {/* Trip Name */}
      <View className="mb-4">
        <Text className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200">
          Trip Name
        </Text>
        <TextInput
          placeholder="e.g., Summer in Paris"
          placeholderTextColor="#9ca3af"
          value={tripName}
          onChangeText={setTripName}
          className="bg-white dark:bg-[#1b2730] border border-gray-300 dark:border-gray-600 rounded-xl p-4 text-base text-gray-800 dark:text-gray-100"
        />
      </View>

      {/* Destination */}
      <View className="mb-4">
        <Text className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200">
          Destination
        </Text>
        <TextInput
          placeholder="Search for a city or country"
          placeholderTextColor="#9ca3af"
          value={destination}
          onChangeText={setDestination}
          className="bg-white dark:bg-[#1b2730] border border-gray-300 dark:border-gray-600 rounded-xl p-4 text-base text-gray-800 dark:text-gray-100"
        />
      </View>

      {/* Switch */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-base font-semibold text-gray-700 dark:text-gray-200">
          Travel by Plane
        </Text>
        <Switch
          value={travelByPlane}
          onValueChange={setTravelByPlane}
          trackColor={{ false: "#ccc", true: "#7b3aed" }}
          thumbColor="#fff"
        />
      </View>

      {/* Arrival */}
      <View className="mb-4">
        <Text className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200">
          Arrival (Local Time)
        </Text>
        <TouchableOpacity
          className="bg-white dark:bg-[#1b2730] border border-gray-300 dark:border-gray-600 rounded-xl p-4"
          onPress={() => setShowArrivalPicker(true)}
        >
          <Text className="text-gray-800 dark:text-gray-100">
            {arrivalDate
              ? arrivalDate.toLocaleString()
              : "Select arrival date and time"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Departure */}
      <View className="mb-4">
        <Text className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200">
          Departure (Local Time)
        </Text>
        <TouchableOpacity
          className="bg-white dark:bg-[#1b2730] border border-gray-300 dark:border-gray-600 rounded-xl p-4"
          onPress={() => setShowDeparturePicker(true)}
        >
          <Text className="text-gray-800 dark:text-gray-100">
            {departureDate
              ? departureDate.toLocaleString()
              : "Select departure date and time"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Stay Place */}
      <View className="mb-6">
        <Text className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200">
          Stay Place
        </Text>
        <TextInput
          placeholder="Search for a hotel or address"
          placeholderTextColor="#9ca3af"
          value={stayPlace}
          onChangeText={setStayPlace}
          className="bg-white dark:bg-[#1b2730] border border-gray-300 dark:border-gray-600 rounded-xl p-4 text-base text-gray-800 dark:text-gray-100"
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity 
        className="bg-[#7b3aed] rounded-xl py-4"
        onPress={sendToTripPreferencesScreen}
        >
        <Text className="text-white text-center font-bold text-lg">Next</Text>
      </TouchableOpacity>

      {/* Date Pickers */}
      <DateTimePickerModal
        isVisible={showArrivalPicker}
        mode="datetime"
        onConfirm={handleArrivalConfirm}
        onCancel={() => setShowArrivalPicker(false)}
      />
      <DateTimePickerModal
        isVisible={showDeparturePicker}
        mode="datetime"
        onConfirm={handleDepartureConfirm}
        onCancel={() => setShowDeparturePicker(false)}
      />
    </SafeAreaView>
  );
}
