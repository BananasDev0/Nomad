import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useShare from "hooks/useShare";
import Title from "components/Title";

export default function GratefulnessScreen() {
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
    <SafeAreaView className="flex-1 bg-white p-5">
      {/* Header */}
      <Title title="Thank You! 🙌" />

      {/* Message */}
      <Text className="text-center text-base text-[#4B5563] my-8 px-6 leading-6">
        Your action was successful. We really appreciate your time and effort!  
        Enjoy the journey ahead 🚀
      </Text>

      {/* Celebration Emoji Animation */}
      <Animated.View
        style={{
          alignItems: 'center',
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
