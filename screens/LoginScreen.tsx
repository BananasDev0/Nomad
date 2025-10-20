import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View className="flex-1 justify-center items-center bg-white px-8">
      {/* App title */}
      <Text className="text-4xl font-extrabold text-purple-600 mb-8">
        Nomad
      </Text>

      {/* Auth Card */}
      <View className="w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <Text className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
        </Text>

        {/* Email */}
        <TextInput
          placeholder="Correo electrónico"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-700"
          placeholderTextColor="#9ca3af"
        />

        {/* Password */}
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-700"
          placeholderTextColor="#9ca3af"
        />

        {/* Confirm password (only signup) */}
        {!isLogin && (
          <TextInput
            placeholder="Confirmar contraseña"
            secureTextEntry
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-700"
            placeholderTextColor="#9ca3af"
          />
        )}

        {/* Button */}
        <TouchableOpacity className="bg-purple-600 py-3 rounded-xl">
          <Text className="text-white text-center font-semibold text-lg">
            {isLogin ? 'Entrar' : 'Registrarse'}
          </Text>
        </TouchableOpacity>

        {/* Toggle */}
        <TouchableOpacity
          className="mt-5"
          onPress={() => setIsLogin(!isLogin)}
        >
          <Text className="text-center text-gray-600">
            {isLogin
              ? '¿No tienes cuenta? '
              : '¿Ya tienes cuenta? '}
            <Text className="text-purple-600 font-semibold">
              {isLogin ? 'Regístrate' : 'Inicia sesión'}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
