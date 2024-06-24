import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordColor, setForgotPasswordColor] = useState('white');
  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
  const [buttonColor, setButtonColor] = useState('rgba(46, 139, 87, 0.6)');
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

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    setUsername('');
    setPassword('');
    setButtonColor('rgba(128, 0, 128, 0.5)');

    setTimeout(() => {
      setButtonColor('rgba(46, 139, 87, 0.6)');
    }, 1000);
  };

  const handleForgotPassword = () => {
    console.log("¿Olvidaste la contraseña?");
    setForgotPasswordColor('rgba(128, 0, 128, 0.5)');
    setForgotPasswordClicked(true);

    setTimeout(() => {
      setForgotPasswordColor('white');
      setForgotPasswordClicked(false);
    }, 1000);
  };

  const handleRegister = () => {
    // Aquí puedes manejar la navegación al formulario de registro
    console.log("Redirigiendo al formulario de registro...");
  };

  if (!fontLoaded) {
    return null; // Mientras se carga la fuente, no renderizar nada
  }

  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <View style={styles.container}>

        <Image source={logo} style={styles.logo} />
        <Text style={styles.iniciar}>Iniciar sesión</Text>

        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="usuario"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="contraseña"
          secureTextEntry={true} 
          style={styles.input}
        />

        <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
          <Text style={[styles.forgotPasswordText, { color: forgotPasswordClicked ? 'purple' : 'white' }]}>¿Olvidaste la contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={[styles.button, { backgroundColor: buttonColor }]}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 80,
  },
  logo: {
    width: 200, 
    height: 200, 
    marginBottom: 20,
  },
  iniciar: {
    fontFamily: 'uwu',
    fontSize: 25,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    fontFamily: 'uwu',
    fontSize: 20,
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
  forgotPassword: {
    marginTop: 20,
  },
  forgotPasswordText: {
    fontFamily: 'uwu',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  registerButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  registerButtonText: {
    fontFamily: 'uwu',
    fontSize: 18,
    color: 'white',
  },
});
