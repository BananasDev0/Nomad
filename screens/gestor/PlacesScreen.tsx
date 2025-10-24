import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlacesScreen() {
  const [places, setPlaces] = useState([
    { id: 1, name: "Parque Fundidora", discarded: false },
    { id: 2, name: "Cerro de la Silla", discarded: false },
    { id: 3, name: "Museo MARCO", discarded: false },
  ]);

  const [showModal, setShowModal] = useState(false);

  // Cambiar el estado de descartado
  const toggleDiscard = (id: number) => {
    setPlaces((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, discarded: !p.discarded } : p
      )
    );
  };

  // Saber si hay descartados
  const hasDiscarded = places.some((p) => p.discarded);

  // Reemplazar los lugares descartados (simulado)
  const replaceDiscarded = () => {
    const newPlaces = places.map((p) =>
      p.discarded
        ? { ...p, name: `${p.name} (nuevo)`, discarded: false }
        : p
    );
    setPlaces(newPlaces);
  };

  // Acción principal dependiendo del estado
  const handleMainAction = () => {
    if (hasDiscarded) {
      replaceDiscarded();
    } else {
      setShowModal(true);
    }
  };

  const completeSelection = () => {
    setShowModal(false);
    console.log("✅ Proceso de selección completado");
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <Text className="text-xl font-bold mb-5 text-[#1F2937]">
        Selecciona tus lugares
      </Text>

      <FlatList
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center mb-3 p-4 rounded-xl border border-[#F3F4F6] bg-[#FAFAFA]">
            <Text
              className={`flex-1 text-base ${
                item.discarded
                  ? "text-[#9CA3AF] line-through"
                  : "text-[#374151]"
              }`}
            >
              {item.name}
            </Text>

            <TouchableOpacity
              className={`px-4 py-2 rounded-lg ${
                item.discarded ? "bg-[#9CA3AF]" : "bg-[#003c49]"
              }`}
              onPress={() => toggleDiscard(item.id)}
            >
              <Text className="text-white text-sm font-semibold">
                {item.discarded ? "Deshacer" : "Descartar"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Botón principal */}
      <TouchableOpacity
        className={`mt-6 p-4 rounded-2xl items-center mb-10 ${
          hasDiscarded ? "bg-[#003c49]" : "bg-[#1F2937]"
        }`}
        onPress={handleMainAction}
      >
        <Text className="text-center text-white font-bold text-base">
          {hasDiscarded ? "Reemplazar lugares" : "Completar selección"}
        </Text>
      </TouchableOpacity>

      {/* Modal de confirmación */}
      <Modal visible={showModal} transparent animationType="slide">
        <View className="flex-1 bg-black/50 justify-center items-center">
          <View className="bg-white p-6 rounded-2xl w-4/5 border border-[#D1D5DB]">
            <Text className="text-lg font-semibold mb-4 text-center text-[#1F2937]">
              ¿Deseas completar la selección de lugares?
            </Text>

            <TouchableOpacity
              className="bg-[#003c49] py-2 rounded-xl mb-2"
              onPress={completeSelection}
            >
              <Text className="text-white text-center font-bold">OK</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-[#F3F4F6] py-2 rounded-xl"
              onPress={() => setShowModal(false)}
            >
              <Text className="text-[#374151] text-center font-semibold">
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
