import React from 'react';

import { FlatList } from 'react-native';

import TelaPadrao from '../../components/TelaPadrao';
import StatusCarrinho from '../../components/StatusCarrinho';
import Item from './item'

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Check-Up",
    preco: 49.9,
    descricao: "Mantenha seu gato saudável com nosso serviço de check-up abrangente. Realizamos exames físicos, avaliamos a saúde bucal, verificamos vacinas e oferecemos orientações personalizadas para o bem-estar do seu felino.",
    quantidade: 1
  },
  {
    id: 4,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
    quantidade: 2
  },
  {
    id: 4,
    nome: "Vacina Antaairrábica",
    preco: 99.9,
    descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
    quantidade: 1
  }
];

export default function Carrinho() {
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return <TelaPadrao>
    <StatusCarrinho total={total} />
    <FlatList
      data={servicos}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </TelaPadrao>
}