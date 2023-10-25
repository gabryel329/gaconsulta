import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MenuScreen({ navigation, route }) {

    const { cpf } = route.params;
    const { cnpj } = route.params;

    const handleButtonPress = (buttonName) => {
        if (buttonName === 'Atendimento') {
          navigation.navigate('Atendimentos', { cpf, cnpj });
        } else if (buttonName === 'Exames') {
          navigation.navigate('Exames', { cpf, cnpj });
        } else if (buttonName === 'Marcações') {
          navigation.navigate('Marcacoes', { cpf, cnpj });
        } else {

        }
    };

  return (
        <View style={styles.container}>
          <View style={styles.borderContainer}>
            <Text style={styles.bigText}><strong>GA</strong></Text>
            <Text style={styles.smallText}><strong>Consulta</strong></Text>
          </View>
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
    backgroundColor: '#2174d4',
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
    backgroundColor: '#e00000',
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
  bigText: {
    fontSize: 80,
    fontWeight: 'Copperplate',
    color: '#2174d4',
  },
  smallText: {
    fontSize: 15,
    fontWeight: 'Copperplate',
    color: '#e00000',
  },
  borderContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default MenuScreen;
