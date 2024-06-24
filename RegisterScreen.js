import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import * as Font from 'expo-font';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [buttonColor, setButtonColor] = useState('rgba(0, 128, 128, 0.5)');
  const [fontLoaded, setFontLoaded] = useState(false);
  const image = { uri: "https://i.postimg.cc/BZBgJjVP/imageonline-co-brightnessadjusted.png" };
  const logo = require('./ranlogo.jpg');

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'uwu': require('./assets/fonts/uwu.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    // Aquí puedes hacer lo que necesites con los datos, como enviarlos a un servidor
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);

    // Mostrar una alerta de éxito
    Alert.alert('Éxito', 'Se enviaron los datos correctamente');

    // Limpiar los campos y restablecer el color del botón después de un tiempo
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setButtonColor('rgba(128, 0, 128, 0.3)');
    setTimeout(() => {
      setButtonColor('rgba(0, 128, 128, 0.5)');
    }, 1000);
  };

  if (!fontLoaded) {
    return null; // Mientras se carga la fuente, no renderizar nada
  }

  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <View style={styles.container}>

        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Registro</Text>

        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Usuario"
          style={styles.input}
        />

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          secureTextEntry={true} 
          style={styles.input}
        />

        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirmar Contraseña"
          secureTextEntry={true} 
          style={styles.input}
        />

        <TouchableOpacity onPress={handleRegister} style={[styles.button, { backgroundColor: buttonColor }]}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    width: 200, 
    height: 200, 
    marginBottom: 20,
  },
  title: {
    fontFamily: 'uwu',
    fontSize: 25,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    fontFamily: 'uwu',
    fontSize: 18,
    height: 60,
    marginVertical: 10,
    padding: 20,
    paddingStart: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'uwu',
    color: 'white',
    fontSize: 18,
  },
});

export default RegisterScreen;
