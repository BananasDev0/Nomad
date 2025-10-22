import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Pressable } from "react-native";
import useShareAndCollaborators from "../../hooks/useShareAndCollaborators";
import { ChevronLeft } from "lucide-react-native";
import useBasicNavigations from "hooks/useBasicNavigations";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddFriendsScreen() {
  const {
    count,
    navigation,
    search,
    setSearch,
    friendName,
    setFriendName,
    filteredFriends,
    selectedFriend,
    handleAddFriend,
    handleSelectFriend,
    currentStep
  } = useShareAndCollaborators();
  const { navigateToback } = useBasicNavigations();

  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      {/* Header */}
      <View className="relative flex-row items-center p-4">
        {/* Botón de atrás */}
        <Pressable onPress={navigateToback} className="z-10">
          <ChevronLeft size={28} color="#0d171b" />
        </Pressable>

        {/* Título centrado */}
        <Text className="absolute left-0 right-0 text-center text-2xl font-bold text-[#1F2937]">
          Who are you? 👤
        </Text>
      </View>
      {/*Step*/}
      <View className="h-2 bg-gray-200 rounded-full mx-6 my-4 overflow-hidden">
        <View
          className="h-2 bg-[#003c49] rounded-full"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        />
      </View>
      <Text className="text-[#4B5563] text-base mb-6">
        <Text className="font-semibold">{count}</Text> friends have joined Nomad!
      </Text>

      {/* Search */}
      <View className="flex-row items-center bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl px-3 py-2 mb-4">
        <Text className="text-lg mr-2">🔍</Text>
        <TextInput
          placeholder="Search your name..."
          placeholderTextColor="#9CA3AF"
          value={search}
          onChangeText={setSearch}
          className="flex-1 text-[#374151] ml-1"
        />
      </View>

      {/* Add friend */}
      <View className="flex-row items-center mb-4">
        <TextInput
          placeholder="Add friend or nickname..."
          placeholderTextColor="#9CA3AF"
          value={friendName}
          onChangeText={setFriendName}
          className="flex-1 bg-[#F3F4F6] text-[#374151] px-3 py-2 rounded-xl border border-[#D1D5DB]"
        />
        <TouchableOpacity
          onPress={handleAddFriend}
          className="ml-3 bg-[#003c49] px-4 py-3 rounded-xl"
        >
          <Text className="text-white text-lg font-bold">➕</Text>
        </TouchableOpacity>
      </View>

      {/* Friend list */}
      <FlatList
        data={filteredFriends}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const isSelected = item === selectedFriend;
          return (
            <TouchableOpacity
              onPress={() => handleSelectFriend(item)}
              className={`p-3 rounded-xl mb-2 ${
                isSelected ? "bg-[#003c49]" : "bg-[#F3F4F6]"
              } border border-[#D1D5DB]`}
            >
              <View className="flex-row justify-between items-center">
                <Text className={`${isSelected ? "text-white" : "text-[#374151]"} text-base`}>
                  {item}
                </Text>
                {isSelected && <Text className="text-white text-sm">You ✅</Text>}
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Create trip button */}
      <TouchableOpacity
        className={`mt-6 p-4 rounded-2xl items-center mb-10 ${
          selectedFriend ? "bg-[#003c49]" : "bg-[#D1D5DB]"
        }`}
        disabled={!selectedFriend}
        onPress={() => { navigation.navigate("TripPreferencesScreen"); }}
      >
        <Text className={`text-lg font-bold text-center ${selectedFriend ? "text-white" : "text-[#374151]"}`}>
          {selectedFriend ? "Create Trip" : "Select who you are first"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
