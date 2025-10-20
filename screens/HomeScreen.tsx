import React from "react";
import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#f6f7f8] dark:bg-[#101c22] px-4 pt-10">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-2xl font-bold text-slate-900 dark:text-white">Your Trips</Text>
        <TouchableOpacity className="bg-slate-200 dark:bg-slate-700 rounded-full w-12 h-12 items-center justify-center">
          <MaterialIcons name="person" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-slate-200 dark:bg-slate-800 rounded-lg h-12 mb-4 px-3">
        <MaterialIcons name="search" size={22} color="#6b7280" />
        <TextInput
          placeholder="Search for a trip"
          placeholderTextColor="#9ca3af"
          className="flex-1 text-base text-slate-900 dark:text-white px-2"
        />
      </View>

      {/* Tabs */}
      <View className="flex-row bg-slate-200 dark:bg-slate-800 rounded-lg h-10 p-1 mb-4">
        <TouchableOpacity className="flex-1 rounded-md bg-[#f6f7f8] dark:bg-[#101c22] justify-center items-center shadow-sm">
          <Text className="text-slate-900 dark:text-white text-sm font-medium">Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 justify-center items-center">
          <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium">Past</Text>
        </TouchableOpacity>
      </View>

      {/* Trip Cards */}
      <ScrollView showsVerticalScrollIndicator={false} className="space-y-4">
        {TRIPS.map((trip, index) => (
          <View
            key={index}
            className="rounded-xl bg-[#f6f7f8] dark:bg-slate-800/50 shadow-sm overflow-hidden"
          >
            <ImageBackground
              source={{ uri: trip.image }}
              className="w-full aspect-video"
              resizeMode="cover"
            />
            <View className="p-4">
              <Text className="text-lg font-bold text-slate-900 dark:text-white">
                {trip.title}
              </Text>
              <Text className="text-base text-slate-500 dark:text-slate-400">
                {trip.date}
              </Text>

              {/* Avatars */}
              <View className="flex-row mt-3">
                {trip.avatars.map((avatar, i) => (
                  <View key={i} className={`-ml-${i === 0 ? 0 : 3}`}>
                    <Image
                      source={{ uri: avatar }}
                      className="w-9 h-9 rounded-full border-[3px] border-[#f6f7f8] dark:border-slate-800/50"
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-[#13a4ec] items-center justify-center shadow-lg">
        <MaterialIcons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const TRIPS = [
  {
    title: "Parisian Dream",
    date: "Aug 15 - Aug 22",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtsBXjgi9p9R1JqpyAMnmO5P_RqGXjrWREbljkWB2Rjzf8c3hsq5dkdsOLUHeCTfOHzF2rh4nnOmodg7matYhEK2ftedYCvd1072Vzo3arHyfTa5Dv2yEos6NptRApEciWeYY2PN90t0xq2rl0WAsIZFEsogLnPUhjeeZDCmQUQJNdGJ4b5PZ6zZKUBDZSK5bw34ofMpRv8pk74fokDQ1FqqqinorORH622rN7HbtGu8dGl8s9Te59--vDPWIMcUAkLxYVwpgL7GHQ",
    avatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCODCBmfgtvXb7E-0jnIPBhna_XKnB5pSnT4xAsWl4DvzO3zmE93v42wtPNNeKXqNUGuAHpPxlshnVq1tIGe_7XPyychjDBP9vSU8xQa877iab0oIL9yq1bNDY1LT3ZXpSYnJlhila_f5NNB8CAMGuR6-iMvM0YW_i6XybErtAjPI6-UdmwMVdO0RJ7JnmjtsscuefbG8zao_oDNmOSh3T_20i1w2n8CWkXY0kcm0KigyrqFgJ3i0Apg2Nyae_lj2rSGcj0dbasCOq",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWtUhW007RyYzJ6FL1RfBkgj-aPXkqCEdr-Dnn43eNLblgZ0Veo419ZjQQ82LZhDxVBzdwwYx4NmOuqMKIYmkmzdBbbYmfilwQD6pG8rQttnKOrjxmUnj1q6O7WK-Q8cSViZpbzXKFIQLx_6rQUJB9U2MJhScNWONMdOZCcQNpU-7eo6Hy2X4Mk4pL6D1QYnjIW86RcH5ONuMGOR7oY7_yZmzya_V8N-38jNbECqHaEnyYsUNx6cDak5F3bF-fqqajO8vpAnnoDKFR",
    ],
  },
  {
    title: "Bali Adventure",
    date: "Sep 10 - Sep 20",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBn90XbZ0vMLfYvjeR8lx9ja3AHw_Hygaty0WSG8HPf5EtpmZ_190gJSQhTbzOkuL1_qjntlkRnFfoPPFRCj9ic23-wka0t8H017Jy2nqol4PT1T0JAZK3vs6PYik9_wpirB6oG6ET4g7UU7T_C-R5TGUANA-s4uDoKQL_i-OBGr93XByUXwCNfKYWPTaMrhShmi0ai7dTT_3nYUCUsEmeFtSa6_m2qIK3ylQaamwsynrY_gun7XbCbeI41pOTTe-ooeDcUBFJsVHoI",
    avatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4jwQjzIar7OrZIu75T2XY7dJ4SRMifyO0V14HcEy8tgSwr-A8kNla5YFuRR650jx8IvU8zqCDaQUpkuJ2t2eahvfKQNuDT5qR9NM34M6aemqAB8ghinsFYZAd1PSdvBr5v_wdPj7Xg2yValDd8nx1SwgvWSHzgYrBf6yqCF8oXGOqWAnDmi70qLQ3-g-suZqAw9VZnCnvM-WRYvHcf2Y5BAswgxy7K2mECGKrJgFCgt0Y6votBCmkXyetjLz3uNXdN1hL8yBQemU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWtUhW007RyYzJ6FL1RfBkgj-aPXkqCEdr-Dnn43eNLblgZ0Veo419ZjQQ82LZhDxVBzdwwYx4NmOuqMKIYmkmzdBbbYmfilwQD6pG8rQttnKOrjxmUnj1q6O7WK-Q8cSViZpbzXKFIQLx_6rQUJB9U2MJhScNWONMdOZCcQNpU-7eo6Hy2X4Mk4pL6D1QYnjIW86RcH5ONuMGOR7oY7_yZmzya_V8N-38jNbECqHaEnyYsUNx6cDak5F3bF-fqqajO8vpAnnoDKFR",
    ],
  },
];
