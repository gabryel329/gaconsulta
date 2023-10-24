import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MenuScreen({ navigation, route }) {

    const { cpf } = route.params;

    const handleButtonPress = (buttonName) => {
        if (buttonName === 'Atendimento') {
            navigation.navigate('Atendimentos', { cpf });
        } else if (buttonName === 'Exames'){
            navigation.navigate('Exames', { cpf });
        }else if (buttonName === 'Marcações'){
            navigation.navigate('Marcacao', { cpf });
        }else{

        }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Atendimento')}>
          <Text style={styles.buttonText}>Atendimentos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Exames')}>
          <Text style={styles.buttonText}>Exames</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Marcações')}>
          <Text style={styles.buttonText}>Marcações</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2174d4',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default MenuScreen;
