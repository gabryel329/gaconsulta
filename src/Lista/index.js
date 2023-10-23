import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

function ListaScreen({ route }) {
  const { cpf } = route.params; // Receba o CPF como parâmetro da tela de login

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8030/api/v1/retornaAtendimentos.asp', {
          method: 'POST',
          headers: {
            'usuario': 'fabamedapi',
            'senha': 'Faba@api2023',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            'tipo': cpf,
            'depara': '26',
          }),
        });
        
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Erro ao consultar a API:', response.statusText);
        }
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
    <View>
      <Text>Tela de Listagem</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.CPF.toString()} 
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.variaveis.nome}</Text>
            <Text>Data de Nascimento: {item.variaveis.nasc}</Text>
            <Text>Convenio: {item.variaveis.convenio}</Text>
            {/* Adicione mais campos conforme necessário */}
          </View>
        )}
      />
    </View>
  );
}

export default ListaScreen;
