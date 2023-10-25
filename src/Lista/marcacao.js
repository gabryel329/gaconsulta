import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, TextInput, ScrollView, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';

function MarcacaoScreen({ route }) {
  const { cpf } = route.params;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8030/api/v1/retornaAtendimentos.asp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            'usuario': 'fabamedapi',
            'senha': 'Faba@api2023',
            'tipo': cpf,
            'depara': '27',
            'TIPOINTEGRACAO_APIMOBILE': 'S',
          }),
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao consultar a API:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [cpf]);

  const dadosFiltrados = data.filter((item) =>
    item.variaveis.procedimento.toLowerCase().includes(filtro.toLowerCase()) || 
    item.variaveis.codigoamb.toLowerCase().includes(filtro.toLowerCase()) ||
    item.variaveis.data.toLowerCase().includes(filtro.toLowerCase()) ||
    item.variaveis.especialidade.toLowerCase().includes(filtro.toLowerCase()) ||
    item.variaveis.medico.toLowerCase().includes(filtro.toLowerCase())
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'gray' },
    input: {
      height: 40,
      borderColor: '#fff',
      backgroundColor: '#fff',
      borderWidth: 1,
      margin: 10,
      padding: 5,
    },
    card: {
      borderColor: '#e00000',
      backgroundColor: '#fff',
      borderWidth: 2,
      marginBottom: 10,
    },
    cardContent: {
      padding: 10,
    },
    cardText: {
      fontWeight: 'bold', // Texto em negrito
    },
    cardHeader: {
      backgroundColor: '#2174d4',
      alignItems: 'center',
      padding: 10,
    },
    cardHeaderText: {
      color: 'white',  // Cor do texto branco
      fontWeight: 'bold',  // Texto em negrito
      fontSize: 16,  // Tamanho da fonte
    },
    cardHeaderTextValue: {
      color: 'white',  // Cor do texto branco
      fontSize: 16,  // Tamanho da fonte
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Filtro"
          value={filtro}
          onChangeText={(text) => setFiltro(text)}
        />
        {dadosFiltrados.map((item, index) => (
          <Card key={index} containerStyle={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Data/Hora:</Text>
              <Text style={styles.cardHeaderTextValue}>{item.variaveis.data} - {item.variaveis.hora}</Text>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardRow}>
                <Text style={styles.cardText}>Médico:</Text>
                <Text>{item.variaveis.medico}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardText}>Especialidade:</Text>
                <Text>{item.variaveis.especialidade}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardText}>Procedimento:</Text>
                <Text>{item.variaveis.procedimento}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardText}>Codigo AMB:</Text>
                <Text>{item.variaveis.codigoamb}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardText}>Observação:</Text>
                <Text>{item.variaveis.observacao}</Text>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default MarcacaoScreen;
