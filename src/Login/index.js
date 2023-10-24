import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

function LoginScreen({ navigation }) {
  const [cpf, setCPF] = useState('');

  const handleLogin = () => {

    navigation.navigate('Lista', { cpf });
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <KeyboardAvoidingView>
        <div >
          <TextInput
            placeholder="CPF"
            value={cpf}
            style={styles.title}
            onChangeText={setCPF}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity onPress={handleLogin}
              style={styles.butao}>
              <Text style={styles.textbutton}>ENTRAR</Text>
          </TouchableOpacity>
        </div>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fafafa",
  },
  list: {
      padding: 20
  },
  logo: {
      height: 100,
      width: 100
  },
  containerlista: {
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      height: 42,
      marginTop: "50%"
  },
  title: {
      fontSize: 20,
      fontWeight: "bold",
      justifyContent: "center",
      color: "#999"
  },
  descricao: {

  },
  butao: {
      height: 42,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#006400",
      backgroundColor: "#006400",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
  },
  butao2: {
      height: 42,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#3b5998",
      backgroundColor: "#3b5998",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
  },
  butao3: {
      height: 42,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#B22222",
      backgroundColor: "#B22222",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
  },
  textbutton:
  {
      fontSize: 14,
      fontWeight: "bold",
      color: "#fff"
  },
  textbutton2:
  {
      fontSize: 14,
      fontWeight: "bold",
      color: "#fff"
  },
  textbutton3:
  {
      fontSize: 14,
      fontWeight: "bold",
      color: "#fff"
  },
  CARDX: {
      marginTop: 100,
  }
})

export default LoginScreen;
