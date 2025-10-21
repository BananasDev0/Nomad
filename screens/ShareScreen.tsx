import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, Easing, Alert, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from "expo-clipboard";
import useBasicNavigations from "hooks/useBasicNavigations";
import { ChevronLeft, Copy } from "lucide-react-native";
import useShare from "hooks/useShare";

export default function ShareLinkScreenFun() {
  const { navigateToback } = useBasicNavigations();
  const {navigateToHome} = useShare();
  const [link] = useState("https://example.com/invite/abc123");

  // Animación del sticker
  const [scaleAnim] = useState(new Animated.Value(1));

  const handleCopyLink = async () => {
    await Clipboard.setStringAsync(link); // Copia el link
    Alert.alert("Copied!", "The link has been copied to your clipboard.");

    // Animación del sticker
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start();
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-5 py-6 items-center">
      {/* Header */}
      <View className="relative flex-row items-center w-full p-4">
        <TouchableOpacity onPress={navigateToback} className="z-10">
          <ChevronLeft size={28} color="#0d171b" />
        </TouchableOpacity>
        <Text className="absolute left-0 right-0 text-center text-2xl font-bold text-[#1F2937]">
          Share with Friends ✨
        </Text>
      </View>

      {/* Description */}
      <Text className="text-center text-base text-[#4B5563] my-6 px-4">
        Send this magical link to invite your friends to join your trip. They can see everything instantly! 🧳🌍
      </Text>

      {/* Link Box + Sticker */}
      <View className="flex-row items-center bg-[#F3F4F6] border border-[#D1D5DB] rounded-2xl px-4 py-4 shadow-md w-full max-w-md">
        <Text className="flex-1 text-[#374151] text-lg font-medium">{link}</Text>
        <TouchableOpacity onPress={handleCopyLink} className="ml-3 bg-[#003c49] p-3 rounded-xl shadow-lg">
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Copy size={24} color="#fff" />
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* Sticker Decorativo */}
      <Animated.View
        style={{
          marginTop: 20,
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Text className="text-6xl">🎉</Text>
      </Animated.View>

      {/* Done Button */}
      <TouchableOpacity
        className="bg-[#003c49] rounded-xl py-4 px-12 mt-10"
        onPress={navigateToHome}
      >
        <Text className="text-white text-center font-bold text-lg">Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
