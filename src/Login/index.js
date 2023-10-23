import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function LoginScreen({ navigation }) {
  const [cpf, setCPF] = useState('');

  const handleLogin = () => {

    navigation.navigate('Lista', { cpf });
    
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCPF}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;
