import React from "react";
import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import useHome from "../hooks/useHome";

export default function HomeScreen() {
  const { sendToAddTrip, sendToUserScreen, sendToItineraryScreen,TRIPS } = useHome();

  return (
    <View className="flex-1 bg-[#1a0f2a] px-4 pt-10 pb-14">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-2xl font-bold text-[#e0d7f7]">Your Trips</Text>
        <TouchableOpacity 
          className="bg-[#3e1f5b] rounded-full w-12 h-12 items-center justify-center"
          onPress={sendToUserScreen}
          >
          <MaterialIcons name="person" size={28} color="#d9cfff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-[#3e1f5b] rounded-lg h-12 mb-4 px-3">
        <MaterialIcons name="search" size={22} color="#c4b3f4" />
        <TextInput
          placeholder="Search for a trip"
          placeholderTextColor="#c4b3f4"
          className="flex-1 text-base text-[#e0d7f7] px-2"
        />
      </View>

      {/* Tabs */}
      <View className="flex-row bg-[#3e1f5b] rounded-lg h-10 p-1 mb-4">
        <TouchableOpacity className="flex-1 rounded-md bg-[#5a2d8f] justify-center items-center shadow-sm">
          <Text className="text-[#e0d7f7] text-sm font-medium">Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 justify-center items-center">
          <Text className="text-[#b8a5e0] text-sm font-medium">Past</Text>
        </TouchableOpacity>
      </View>

      {/* Trip Cards */}
      <ScrollView showsVerticalScrollIndicator={false} className="space-y-4">
        {TRIPS.map((trip, index) => (
          <Pressable key={index} onPress={sendToItineraryScreen}>
          <View
            key={index}
            className="rounded-xl bg-[#2e1b47] shadow-md overflow-hidden"
          >
            <ImageBackground
              source={{ uri: trip.image }}
              className="w-full aspect-video"
              resizeMode="cover"
            />
            <View className="p-4">
              <Text className="text-lg font-bold text-[#e0d7f7]">
                {trip.title}
              </Text>
              <Text className="text-base text-[#b8a5e0]">
                {trip.date}
              </Text>

              {/* Avatars */}
              <View className="flex-row mt-3">
                {trip.avatars.map((avatar, i) => (
                  <View key={i} className={`-ml-${i === 0 ? 0 : 3}`}>
                    <Image
                      source={{ uri: avatar }}
                      className="w-9 h-9 rounded-full border-[3px] border-[#2e1b47]"
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
        className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-[#9b5de5] items-center justify-center shadow-lg"
        onPress={sendToAddTrip}
        >
        <MaterialIcons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
