import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'gray' },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#fff',
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
    fontWeight: 'bold',
  },
  cardHeader: {
    backgroundColor: '#2174d4',
    alignItems: 'center',
    padding: 10,
  },
  cardHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardHeaderTextValue: {
    color: 'white',
    fontSize: 16,
  },
});

function ListaScreen({ route }) {
  const { cpf } = route.params;
  const { cnpj } = route.params;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      try {         
        const w_primeiro = await fetch('http://localhost:8030/api/v1/retornaAtendimentos.asp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            'usuario': 'fabamedapi',
            'senha': 'Faba@api2023',
            'tipo': cnpj,
            'depara': '28',
            'TIPOINTEGRACAO_APIMOBILE': 'S',
          }),
        });
        const primeiro = await w_primeiro.json(); 

        

        const secondResponse = await fetch(''+primeiro.variavel+'', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            'usuario': 'fabamedapi',
            'senha': 'Faba@api2023',
            'tipo': cpf,
            'depara': '26',
            'TIPOINTEGRACAO_APIMOBILE': 'S',
          }),
        });
        const secondResult = await secondResponse.json();  

        setData(secondResult);
      } catch (error) {
        console.error('Erro ao consultar a API:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [cpf, cnpj]);

  const dadosFiltrados = data.filter((item) =>
    item.variaveis.procedimento.toLowerCase().includes(filtro.toLowerCase()) ||
    item.variaveis.atendimento.toLowerCase().includes(filtro.toLowerCase()) ||
    item.variaveis.entrada.toLowerCase().includes(filtro.toLowerCase()) ||
    item.variaveis.cps.toLowerCase().includes(filtro.toLowerCase()) ||
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
              <Text style={styles.cardHeaderText}>Atendimento</Text>
              <Text style={styles.cardHeaderTextValue}>{item.variaveis.atendimento}</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardRow}>
                <Text style={styles.cardText}>Código Atendimento:</Text>
                <Text>{item.variaveis.cps}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardText}>Entrada:</Text>
                <Text>{item.variaveis.entrada}</Text>
              </View>
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
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListaScreen;
