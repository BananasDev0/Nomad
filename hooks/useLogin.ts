import { useState } from "react";
import { Alert } from "react-native";


export default function useLogin() {
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

  return {
    isLogin,
    setIsLogin,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handlePress
  };
}