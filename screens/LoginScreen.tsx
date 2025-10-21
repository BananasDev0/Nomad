import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import useLogin from '../hooks/useLogin';

export default function LoginScreen() {
  const {
    isLogin,
    setIsLogin,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handlePress
  } = useLogin();

  return (
    <View className="flex-1 justify-center items-center bg-white px-8">
      {/* App title */}
      <Text className="text-4xl font-extrabold text-[#003c49] mb-8">
        Nomad
      </Text>

      {/* Auth Card */}
      <View className="w-full bg-[#FFFFFF] p-6 rounded-2xl shadow-lg border border-[#F3F4F6]">
        <Text className="text-2xl font-semibold text-center text-[#1F2937] mb-6">
          {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
        </Text>

        {/* Usuario */}
        <TextInput
          placeholder="Usuario"
          className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 mb-4 text-[#374151]"
          placeholderTextColor="#9CA3AF"
          value={username}
          onChangeText={setUsername}
        />

        {/* Contraseña */}
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 mb-6 text-[#374151]"
          placeholderTextColor="#9CA3AF"
          value={password}
          onChangeText={setPassword}
        />

        {/* Confirmar contraseña (solo registro) */}
        {!isLogin && (
          <TextInput
            placeholder="Confirmar contraseña"
            secureTextEntry
            className="w-full border border-[#D1D5DB] rounded-xl px-4 py-3 mb-6 text-[#374151]"
            placeholderTextColor="#9CA3AF"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        )}

        {/* Botón principal */}
        <TouchableOpacity
          className="bg-[#003c49] py-3 rounded-xl"
          onPress={handlePress}
        >
          <Text className="text-white text-center font-semibold text-lg">
            {isLogin ? 'Entrar' : 'Registrarse'}
          </Text>
        </TouchableOpacity>

        {/* Cambiar entre login / registro */}
        <TouchableOpacity
          className="mt-5"
          onPress={() => setIsLogin(!isLogin)}
        >
          <Text className="text-center text-[#4B5563]">
            {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
            <Text className="text-[#003c49] font-semibold">
              {isLogin ? 'Regístrate' : 'Inicia sesión'}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
