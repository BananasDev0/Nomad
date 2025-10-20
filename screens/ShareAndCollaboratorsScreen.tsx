import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import useShareAndCollaborators from "../hooks/useShareAndCollaborators";

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
  } = useShareAndCollaborators();

  return (
    <View className="flex-1 bg-[#1a103d] p-5">
      {/* Header */}
      <Text className="text-white text-2xl font-bold mb-4 mt-5">Who are you?</Text>
      <Text className="text-white text-base mb-6">
        <Text className="font-semibold">{count}</Text> friends have joined Nomad!
      </Text>
      {/* Search */}
      <View className="flex-row items-center bg-[#2e1b47] rounded-xl px-3 py-2 mb-4">
        <Text className="text-lg mr-2">🔍</Text>
        <TextInput
          placeholder="Search your name..."
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={setSearch}
          className="flex-1 text-white ml-1"
        />
      </View>

      {/* Add friend */}
      <View className="flex-row items-center mb-4">
        <TextInput
          placeholder="Add friend or nickname..."
          placeholderTextColor="#aaa"
          value={friendName}
          onChangeText={setFriendName}
          className="flex-1 bg-[#2e1b47] text-white px-3 py-2 rounded-xl"
        />
        <TouchableOpacity
          onPress={handleAddFriend}
          className="ml-3 bg-purple-600 px-4 py-3 rounded-xl"
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
                isSelected ? "bg-purple-700" : "bg-[#2e1b47]"
              }`}
            >
              <View className="flex-row justify-between items-center">
                <Text className="text-white text-base">{item}</Text>
                {isSelected && <Text className="text-white text-sm">You ✅</Text>}
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Create trip button */}
      <TouchableOpacity
        className={`mt-6 p-4 rounded-2xl items-center mb-10 ${
          selectedFriend ? "bg-purple-700" : "bg-gray-600"
        }`}
        disabled={!selectedFriend}
        onPress={()=>{navigation.navigate("TripPreferencesScreen")}}
      >
        <Text className="text-white font-bold text-lg">
          {selectedFriend ? "Create Trip" : "Select who you are first"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
