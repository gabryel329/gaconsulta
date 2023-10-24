import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet,SafeAreaView, ActivityIndicator,  TouchableOpacity } from 'react-native';
import axios from 'axios';

function ListaScreen({ route }) {
  const { cpf } = route.params; // Receba o CPF como par�metro da tela de login

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://26.135.190.62/api/v1/retornaAtendimentos.asp', {
          method: 'POST',
          body: new URLSearchParams({
            'usuario': 'fabamedapi',
            'senha': 'Faba@api2023',
            'tipo': cpf,
            'depara': '26',
            'TIPOINTEGRACAO_APIMOBILE':'S',
          }),
        });
        const result = await response.json();
        
       console.log(setData(result));
      } catch (error) {
        console.error('Erro ao consultar a API:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [cpf]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{
      felx: 1, flexDirection: "row", padding: 1,
      marginBottom: 20,
      borderColor: "#ddd",
      backgroundColor: "#FFF",
      borderRadius: 5

  }}>
      
      <SafeAreaView
      style={{
        felx: 1, flexDirection: "row", padding: 1,
        marginBottom: 20,
        borderColor: "#ddd",
        backgroundColor: "#FFF",
        borderRadius: 5
  
    }}
      >
          <FlatList
            data={data}
            keyExtractor={(item) => item.CPF.toString()} 
            renderItem={({ item }) => (
              <View>
                <Text>Nome: {item.variaveis.nome}</Text>
                <Text>Data de Nascimento: {item.variaveis.nasc}</Text>
                <Text>Convenio: {item.variaveis.convenio}</Text>
                {/* Adicione mais campos conforme necess�rio */}
              </View>
            )}
          />
     </SafeAreaView>
    </View>
  );
  
}



export default ListaScreen;
