import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft } from "lucide-react-native";
import useBasicNavigations from "hooks/useBasicNavigations";
import useShare from "hooks/useShare";

export default function GratefulnessScreen() {
  const { navigateToback } = useBasicNavigations();
  const { navigateToHome } = useShare();

  const [scaleAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white px-5 py-6 items-center">
      {/* Header */}
      <View className="relative flex-row items-center w-full p-4">
        <TouchableOpacity onPress={navigateToback} className="z-10">
          <ChevronLeft size={28} color="#0d171b" />
        </TouchableOpacity>
        <Text className="absolute left-0 right-0 text-center text-2xl font-bold text-[#1F2937]">
          Thank You! 🙌
        </Text>
      </View>

      {/* Message */}
      <Text className="text-center text-base text-[#4B5563] my-8 px-6 leading-6">
        Your action was successful. We really appreciate your time and effort!  
        Enjoy the journey ahead 🚀
      </Text>

      {/* Celebration Emoji Animation */}
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Text className="text-7xl">🎉</Text>
      </Animated.View>

      {/* Done Button */}
      <TouchableOpacity
        className="bg-[#003c49] rounded-xl py-4 px-12 mt-12"
        onPress={navigateToHome}
      >
        <Text className="text-white text-center font-bold text-lg">
          Go Home
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
