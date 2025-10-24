import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BarSteps from "components/BarSteps";
import Title from "components/Title";

const preferencesData = [
  { label: "Adventure", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1remShvn_SlUuqjKqihz8WiGrvrgwaU5NZbqQD-8352UheYtZGFnBa6cLK2ZUAiSDDAknBIvcVQHGWlCU2RIkJo2tfCw6g1yZXO5Grkn8fvCfq7a7LkSDsuqWY1gZjkgVUnacMCVBwYJspzAR6V18qEP86WQX7ArtcNwwKSIb1Ks1tQ4H8z6HtxQscDcClNJaR7yw4azQSf_Rzfe1fW3qmC2ReYXyokufVMAVQ2SlQRaJWaROmBiUOr-WoPa9llLeTMHw-zeTSDR0" },
  { label: "Relaxation", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCthLMImeZ5WHHdVIm_9sDzl3nMvEhmSy-M6L8TT6T7H0ZZ3qc49zpWbS_aWwADDDdqntEx7i9OJzCJTe9qqVCQDq6pDNzhi1DQhVORcV1pr9eAHjrc9fFXYk1UNSEuk2fZqlZbF8ynFtRO6KIl6A5_r6Xe3ICCJ3RCwhenagkx2pyLms0ldaSSbp9Xz8eHN7MNhoJvwIUDCTB9w8galeDzEL3TVYjK4xOfYlNWjSwc8BjslSwvFAAr4mr4LEXhQbUqHdx351FudszQ" },
  { label: "Culture", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwjCy_59Triu_4D_CLvMVwp_GtM8768KN27LVeT5iBdcTRJ1GabBGmtSy600bobmwjd5mZ08bGTG9uTsn26PXYl4WnBVWpIJm5z7rUI4DEoZQdPTSsT00mx5iUT9G_AFh-9AW5LyLSHldrybuUoYIChw7cMZSqHxQyI1HZbJBhMTrRY1LqrDR2JyNvQZN6a1bxp25VBf9NI-oMkYIiEWk2xoTgqwZrqMIKnAcM7gS_D5jJK-JbUhtpGDQm7TuozNCoGLj3PoxyWsN-" },
  { label: "Foodie", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWwUI1zd40K1z7SkDcG5Z0bcZ1Cvku-gr_IzwEOkMaEb-kDzEHbSEJoqzVpX0mxsFnhsfwoUjrBPKidvD5CNg2QkakAT7NNTIe6XsCDp5VWmO6PRDShSKX9325ztXPpkFG8N-iO5BvXU300EiwQdUPUnr0ZD_xI17hzRIFf3T7F18aVa8-THnFJQnj3MN5R24sCFSH88pSbXg3APYyLMIiSGvIS_KKo2w-a64LJXKGq44WBEO1gKRnUVxu2AFCWaULAybS4X61VuCl" },
  { label: "Nightlife", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfv-85lkQ6DzjizoPh_GJU9Ofm71cchmP1t2UHv48guLOrHJ2kHlz6-Sxpz4mvVHT6LkAvNwKHySNGxfPDDXFme2Bq-8X8n3Wcy4g9S6nYlKrU3rTLkjix0vNtjo_MiczQWZnMj6yNcm7_7TEt8faigCtE2xueEvxe1xsd5qsYY4tvfWNjlR2I4mJh_vZabF29DRXaO-vbygcYTTccjVUJ4jyVfJi137O5HMq8aHPJ5QmS-T4r9J3_YErCiZ5wssdM8vKfrb0Ym3Yc" },
  { label: "Shopping", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUcTU_Cpe1xCstwQVgUg9Q8aRhAPgND7UI7yADuv7KD9xVuSHL64H1WwnpMVZSc_zxdpl2bixEKagEUuijBj2KjhIqIRsdag-0Ama1zOc6tcxlrb_2cbMJfTupDXLlQuS1G5dSKq_0oQ0LGrUwmRzTbcvkBzziTTgDQUlsDc3P0gmC1xQEGSOPJ19fc4kgCliWxPlJpPX8Njym8W4rRh4oeRKLuznZQELsIYOW46GBjZpM7SEVHJPoh8VuGB-GuNuYDS5jYxN5R0bT" },
  { label: "Nature", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgW8qQzejrZKfwdeJr33e-pqVPR4ifQ_292fdfIwAchhgDp1z8J2xxY9bYeCNUKYMsffktZjrB7mWC6BJ1G5i-VfhA_aait0D3PtndVMxTvCUCIAkM0WW5LvRsf2L8ZAarGMgbsVMGVmwmAKtlEfTmMKsyWD9odNCekQfCbvCrIQIzh5usipUrvbvSKU9DMIfxIIjQmV8dEgyeW3qJ5VQ1Sv5MvEDrZAJSJU1HVE17FdcGqJJRhcvb71X_NeSJUak1u6u94DLLmdcY" },
  { label: "Budget-Friendly", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaJ7BnOpWH9ldC_zuhRvbdVv_C-FscHeV6P1i5Yu8IOMXVRtf4iUonK8TKKFT1ejytMFj2yqImpJuHMZhzFb4oVIDHRbtURNfwg6hVBoM6caTwD4UYs80iF-tHimLeolvDswuXyQeci-q5y7TYj8UUh-0ytuj-YWg-yqpEOSKh-suIjJm1TU5HSsmn05kQ8hZb1m5JHXTjlrPbKq78Mu2DLngrlZktdAtK47ySZxNHf2twOGFDPs_2BFGINSiGk6V9zrNsOHCPGI3x" },
];

export default function PreferencesLinkScreen() {
  const navigation = useNavigation<any>();
  const [currentStep] = useState(3);

  const [selected, setSelected] = useState<number[]>([]);

  const togglePreference = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const sendToGrateFulness = () => {
    navigation.navigate("GratefulnessScreen");
  }

  return (
    <SafeAreaView className="flex-1 bg-white pt-6">
      <ScrollView className="flex-1">
        {/* Header */}
        <Title title="What do you prefer? 🎯" />
        
        {/*Step*/}
        <BarSteps currentStep={currentStep} />

        {/* Preferences Grid */}
        <View className="flex-row flex-wrap justify-center gap-4 p-4">
          {preferencesData.map((pref, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => togglePreference(index)}
              className="relative rounded-xl overflow-hidden w-[158px] h-[158px]"
            >
              <ImageBackground
                source={{ uri: pref.image }}
                className="flex-1 justify-end p-4"
                imageStyle={{ borderRadius: 20 }}
              >
                <View
                  className={`absolute inset-0 bg-black/40 ${
                    selected.includes(index) ? "border-4 border-primary" : ""
                  }`}
                />
                <Text className="text-white text-base font-bold">{pref.label}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          className="bg-[#003c49] rounded-xl py-4 p6 mx-4 mt-4"
          onPress={sendToGrateFulness}
        >
          <Text className="text-white text-center font-bold text-lg">Upload Info</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
