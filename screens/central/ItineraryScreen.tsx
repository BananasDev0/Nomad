import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const itinerary = [
  {
    day: "Monday, June 10",
    activities: [
      { icon: "account-balance", title: "Eiffel Tower Visit", start: "9:00 AM", end: "11:00 AM" },
      { icon: "restaurant", title: "Le Bistrot d'Henri", start: "12:30 PM", end: "2:00 PM" },
      { icon: "museum", title: "Louvre Museum Tour", start: "2:30 PM", end: "5:00 PM" },
      { icon: "directions-boat", title: "Seine River Cruise", start: "7:00 PM", end: "" },
    ],
  },
  {
    day: "Tuesday, June 11",
    activities: [
      { icon: "church", title: "Explore Montmartre", start: "10:00 AM", end: "1:00 PM" },
      { icon: "park", title: "Picnic at Sacré-Cœur", start: "1:00 PM", end: "2:00 PM" },
      { icon: "shopping-bag", title: "Shopping on Champs-Élysées", start: "3:00 PM", end: "6:00 PM" },
    ],
  },
  {
    day: "Wednesday, June 12",
    activities: [
      { icon: "local-cafe", title: "Breakfast at Café de Flore", start: "8:00 AM", end: "9:30 AM" },
      { icon: "museum", title: "Musée d'Orsay Visit", start: "10:00 AM", end: "1:00 PM" },
      { icon: "park", title: "Walk in Luxembourg Gardens", start: "2:00 PM", end: "4:00 PM" },
    ],
  },
  {
    day: "Thursday, June 13",
    activities: [
      { icon: "local-library", title: "Shakespeare and Company Bookstore", start: "9:00 AM", end: "10:30 AM" },
      { icon: "restaurant", title: "Lunch at Le Comptoir", start: "11:00 AM", end: "12:30 PM" },
      { icon: "landscape", title: "Notre Dame & Île de la Cité", start: "1:00 PM", end: "3:30 PM" },
    ],
  },
  {
    day: "Friday, June 14",
    activities: [
      { icon: "shopping-bag", title: "Le Marais Shopping", start: "10:00 AM", end: "1:00 PM" },
      { icon: "local-cafe", title: "Coffee Break at Café Charlot", start: "1:00 PM", end: "2:00 PM" },
      { icon: "directions-walk", title: "Walk along the Seine", start: "2:30 PM", end: "5:00 PM" },
    ],
  },
];

export default function ItineraryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF]">
      {/* Top App Bar */}
      <View className="flex-row items-center justify-between bg-[#FFFFFF] p-4 border-b border-[#D1D5DB]">
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text className="text-lg font-bold flex-1 text-center text-[#1F2937]">
          Parisian Adventure
        </Text>
        <View className="w-6" />
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 px-4 pb-28">
        <View className="pt-6 pb-4">
          <Text className="text-2xl font-bold text-[#1F2937]">
            Paris, France
          </Text>
          <Text className="text-sm text-[#4B5563] pt-1">
            June 10 - June 15, 2024
          </Text>
        </View>

        {/* Days */}
        {itinerary.map((dayItem, idx) => (
          <View
            key={idx}
            className="bg-[#FFFFFF] rounded-xl p-4 shadow-sm border border-[#F3F4F6] mb-6"
          >
            <Text className="text-lg font-bold text-[#1F2937] mb-4">
              {dayItem.day}
            </Text>

            {dayItem.activities.map((act, i) => (
              <View key={i}>
                <View className="flex-row items-center gap-4 mb-2">
                  <View className="bg-[#003c49]/10 p-3 rounded-lg">
                    <MaterialIcons
                      name={act.icon as any}
                      size={24}
                      color="#003c49"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-medium text-[#1F2937]">
                      {act.title}
                    </Text>
                    <Text className="text-sm text-[#4B5563]">
                      {act.start} {act.end ? `- ${act.end}` : ""}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Text className="text-[#003c49] text-sm font-medium">
                      View Details
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="border-t border-[#F3F4F6] my-2" />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity
        className="absolute bottom-24 right-4 rounded-full flex-row items-center justify-center shadow-lg"
        style={{
          backgroundColor: "#003c49",
          height: 64,
          width: 192,
          paddingHorizontal: 16,
        }}
      >
        <MaterialIcons name="share" size={24} color="white" />
        <Text className="text-white font-medium ml-2">Share Itinerary</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
