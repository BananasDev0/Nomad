import React from "react";
import { View, Text, TextInput, Switch, TouchableOpacity, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import useTrip from "../../hooks/useTrip";
import useBasicNavigations from "hooks/useBasicNavigations";
import { ChevronLeft } from "lucide-react-native";
import BarSteps from "components/BarSteps";

export default function TripScreen() {
  const {
    tripName,
    setTripName,
    destination,
    setDestination,
    travelByPlane,
    setTravelByPlane,
    arrivalDate,
    departureDate,
    showArrivalPicker,
    setShowArrivalPicker,
    showDeparturePicker,
    setShowDeparturePicker,
    stayPlace,
    setStayPlace,
    handleArrivalConfirm,
    handleDepartureConfirm,
    sendToShareAndCollaboratorsScreen,
    currentStep
  } = useTrip();
  const { navigateToback } = useBasicNavigations();

  return (
    <SafeAreaView className="flex-1 bg-white px-5 py-6">
      {/* Header */}
      <View className="relative flex-row items-center p-4">
        {/* Botón de atrás */}
        <Pressable onPress={navigateToback} className="z-10">
          <ChevronLeft size={28} color="#0d171b" />
        </Pressable>

        {/* Título centrado */}
        <Text className="absolute left-0 right-0 text-center text-2xl font-bold text-[#1F2937]">
          Create Your Trip ✈️
        </Text>
      </View>

      {/*Step*/}
      <BarSteps currentStep={currentStep} />

      {/* Trip Name */}
      <View className="mb-4">
        <Text className="text-base font-semibold mb-2 text-[#4B5563]">
          Trip Name
        </Text>
        <TextInput
          placeholder="e.g., Summer in Paris"
          placeholderTextColor="#9CA3AF"
          value={tripName}
          onChangeText={setTripName}
          className="bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl p-4 text-base text-[#374151]"
        />
      </View>

      {/* Destination */}
      <View className="mb-4">
        <Text className="text-base font-semibold mb-2 text-[#4B5563]">
          Destination
        </Text>
        <TextInput
          placeholder="Search for a city or country"
          placeholderTextColor="#9CA3AF"
          value={destination}
          onChangeText={setDestination}
          className="bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl p-4 text-base text-[#374151]"
        />
      </View>

      {/* Switch */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-base font-semibold text-[#4B5563]">
          Travel by Plane
        </Text>
        <Switch
          value={travelByPlane}
          onValueChange={setTravelByPlane}
          trackColor={{ false: "#ccc", true: "#003c49" }}
          thumbColor="#FFFFFF"
        />
      </View>

      {/* Arrival */}
      <View className="mb-4">
        <Text className="text-base font-semibold mb-2 text-[#4B5563]">
          Arrival (Local Time)
        </Text>
        <TouchableOpacity
          className="bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl p-4"
          onPress={() => setShowArrivalPicker(true)}
        >
          <Text className="text-[#374151]">
            {arrivalDate
              ? arrivalDate.toLocaleString()
              : "Select arrival date and time"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Departure */}
      <View className="mb-4">
        <Text className="text-base font-semibold mb-2 text-[#4B5563]">
          Departure (Local Time)
        </Text>
        <TouchableOpacity
          className="bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl p-4"
          onPress={() => setShowDeparturePicker(true)}
        >
          <Text className="text-[#374151]">
            {departureDate
              ? departureDate.toLocaleString()
              : "Select departure date and time"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Stay Place */}
      <View className="mb-6">
        <Text className="text-base font-semibold mb-2 text-[#4B5563]">
          Stay Place
        </Text>
        <TextInput
          placeholder="Search for a hotel or address"
          placeholderTextColor="#9CA3AF"
          value={stayPlace}
          onChangeText={setStayPlace}
          className="bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl p-4 text-base text-[#374151]"
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity 
        className="bg-[#003c49] rounded-xl py-4"
        onPress={sendToShareAndCollaboratorsScreen}
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
