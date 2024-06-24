import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import * as Font from 'expo-font';

export default function RegistroScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  const handleRegister = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    
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
          placeholder="usuario"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="password"
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
});

