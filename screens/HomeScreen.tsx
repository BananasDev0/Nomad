import React from "react";
import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import useHome from "../hooks/useHome";

export default function HomeScreen() {
  const { sendToAddTrip, sendToUserScreen, sendToItineraryScreen, TRIPS } = useHome();

  return (
    <View className="flex-1 bg-white px-4 pt-10 pb-14">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-2xl font-bold text-[#1F2937]">Your Trips</Text>
        <TouchableOpacity 
          className="bg-[#7C3AED] rounded-full w-12 h-12 items-center justify-center"
          onPress={sendToUserScreen}
        >
          <MaterialIcons name="person" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-[#F3F4F6] rounded-lg h-12 mb-4 px-3 border border-[#D1D5DB]">
        <MaterialIcons name="search" size={22} color="#9CA3AF" />
        <TextInput
          placeholder="Search for a trip"
          placeholderTextColor="#9CA3AF"
          className="flex-1 text-base text-[#374151] px-2"
        />
      </View>

      {/* Tabs */}
      <View className="flex-row rounded-lg h-10 p-1 mb-4">
        <TouchableOpacity className="flex-1 rounded-md bg-[#7C3AED] justify-center items-center shadow-sm">
          <Text className="text-white text-sm font-medium">Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 justify-center items-center">
          <Text className="text-[#4B5563] text-sm font-medium">Past</Text>
        </TouchableOpacity>
      </View>

      {/* Trip Cards */}
      <ScrollView showsVerticalScrollIndicator={false} className="space-y-4">
        {TRIPS.map((trip, index) => (
          <Pressable key={index} onPress={sendToItineraryScreen}>
            <View className="rounded-xl bg-[#F3F4F6] shadow-md overflow-hidden border border-[#D1D5DB]">
              <ImageBackground
                source={{ uri: trip.image }}
                className="w-full aspect-video"
                resizeMode="cover"
              />
              <View className="p-4">
                <Text className="text-lg font-bold text-[#1F2937]">{trip.title}</Text>
                <Text className="text-base text-[#4B5563]">{trip.date}</Text>

                {/* Avatars */}
                <View className="flex-row mt-3">
                  {trip.avatars.map((avatar, i) => (
                    <View key={i} className={`-ml-${i === 0 ? 0 : 3}`}>
                      <Image
                        source={{ uri: avatar }}
                        className="w-9 h-9 rounded-full border-[3px] border-[#F3F4F6]"
                      />
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity 
        className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-[#7C3AED] items-center justify-center shadow-lg"
        onPress={sendToAddTrip}
      >
        <MaterialIcons name="add" size={32} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}
