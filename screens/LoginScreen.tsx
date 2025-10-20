import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState<{ [key: string]: string }>({});

  const handleLogin = () => {
    if (
      (username === 'admin' && password === 'admin') ||
      (registeredUsers[username] && registeredUsers[username] === password)
    ) {
      Alert.alert('Éxito', `Bienvenido ${username}`);
      // Aquí podrías navegar: navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    if (registeredUsers[username]) {
      Alert.alert('Error', 'Ese usuario ya existe');
      return;
    }

    setRegisteredUsers({ ...registeredUsers, [username]: password });
    Alert.alert('Registro exitoso', 'Ahora puedes iniciar sesión');
    setIsLogin(true);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  const handlePress = () => {
    if (isLogin) handleLogin();
    else handleRegister();
  };

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

        {/* Usuario */}
        <TextInput
          placeholder="Usuario"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-700"
          placeholderTextColor="#9ca3af"
          value={username}
          onChangeText={setUsername}
        />

        {/* Contraseña */}
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-700"
          placeholderTextColor="#9ca3af"
          value={password}
          onChangeText={setPassword}
        />

        {/* Confirmar contraseña (solo registro) */}
        {!isLogin && (
          <TextInput
            placeholder="Confirmar contraseña"
            secureTextEntry
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-700"
            placeholderTextColor="#9ca3af"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        )}

        {/* Botón principal */}
        <TouchableOpacity
          className="bg-purple-600 py-3 rounded-xl"
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
          <Text className="text-center text-gray-600">
            {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
            <Text className="text-purple-600 font-semibold">
              {isLogin ? 'Regístrate' : 'Inicia sesión'}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
