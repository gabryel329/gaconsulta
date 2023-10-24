import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';

function LoginScreen({ navigation }) {
  const [cpf, setCPF] = useState('');

  const handleLogin = () => {
    if (cpf.length === 11) {
      navigation.navigate('Menu', { cpf });
    } else {
      setError('Digite um CPF válido');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.bigText}>GA</Text>
          <Text style={styles.smallText}>Consulta</Text>
        </View>
        <TextInput
          placeholder="CPF"
          value={cpf}
          style={styles.input}
          onChangeText={text => {
            // Remove qualquer caractere não numérico
            const numericValue = text.replace(/\D/g, '');
            setCPF(numericValue);
          }}
          keyboardType="numeric"
          maxLength={11} // Limita a 11 caracteres
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  bigText: {
    fontSize: 80,
    fontWeight: 'Copperplate',
    color: '#2174d4',
  },
  smallText: {
    fontSize: 15,
    fontWeight: 'Copperplate',
    color: '#ff0000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'Copperplate',
    color: '#999',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    width: '100%',
  },
  button: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2174d4',
    backgroundColor: '#2174d4',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default LoginScreen;
