import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

export default function UserScreen() {
  // States de usuario
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // Método para actualizar info (simulado)
  const handleUpdate = () => {
    if (!username || !email) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }
    Alert.alert('Éxito', `Usuario: ${username}\nCorreo: ${email}`);
    // Aquí iría tu lógica real de actualización
  };

  return (
    <View className="flex-1 justify-center items-center bg-purple-50 px-6">
      {/* App title */}
      <Text className="text-4xl font-extrabold text-purple-700 mb-8">
        Nomad
      </Text>

      {/* User Info Card */}
      <View className="w-full bg-white p-6 rounded-2xl shadow-md border border-purple-200">
        <Text className="text-2xl font-semibold text-center text-purple-800 mb-6">
          Información del usuario
        </Text>

        {/* Nombre de usuario */}
        <TextInput
          placeholder="Nombre de usuario"
          className="w-full border border-purple-300 rounded-xl px-4 py-3 mb-4 text-gray-700"
          placeholderTextColor="#a78bfa"
          value={username}
          onChangeText={setUsername}
        />

        {/* Email */}
        <TextInput
          placeholder="Correo electrónico"
          className="w-full border border-purple-300 rounded-xl px-4 py-3 mb-6 text-gray-700"
          placeholderTextColor="#a78bfa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Botón actualizar */}
        <TouchableOpacity
          className="bg-purple-600 py-3 rounded-xl"
          onPress={handleUpdate}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Actualizar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
