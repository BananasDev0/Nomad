import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal } from "react-native";

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
    <View className="flex-1 bg-white p-4">
      <Text className="text-lg font-bold mb-4">Selecciona tus lugares</Text>

      <FlatList
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center mb-2 p-3 bg-gray-100 rounded-xl">
            <Text className={`${item.discarded ? "text-gray-400 line-through" : "text-black"}`}>
              {item.name}
            </Text>
            <TouchableOpacity
              className={`px-3 py-1 rounded-full ${
                item.discarded ? "bg-red-400" : "bg-red-600"
              }`}
              onPress={() => toggleDiscard(item.id)}
            >
              <Text className="text-white text-sm">
                {item.discarded ? "Deshacer" : "Descartar"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Botón principal */}
      <TouchableOpacity
        className={`mt-6 py-3 rounded-xl ${
          hasDiscarded ? "bg-blue-500" : "bg-green-600"
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
          <View className="bg-white p-6 rounded-2xl w-4/5">
            <Text className="text-lg font-semibold mb-3 text-center">
              ¿Deseas completar la selección de lugares?
            </Text>
            <TouchableOpacity
              className="bg-green-600 py-2 rounded-xl mb-2"
              onPress={completeSelection}
            >
              <Text className="text-white text-center font-bold">OK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-gray-300 py-2 rounded-xl"
              onPress={() => setShowModal(false)}
            >
              <Text className="text-center">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
