import React from "react";
import { FlatList} from "react-native";

import Item from '../Servicos/item/index'
import TelaPadrao from "../../components/TelaPadrao";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar, nós damos!"
    },
    {
        id: 2,
        nome: "Check-Up",
        preco: 49.9,
        descricao: "Mantenha seu gato saudável com nosso serviço de check-up abrangente. Realizamos exames físicos, avaliamos a saúde bucal, verificamos vacinas e oferecemos orientações personalizadas para o bem-estar do seu felino."
    },
    {
        id: 3,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas!"
    },
    {
        id: 4,
        nome: "Vacina antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano!"
    },
];

export default function Carrinho() {
    return (
        <TelaPadrao>
                <FlatList
                    data={servicos}
                    removeClippedSubviews={false}
                    renderItem={({item}) => <Item {...item}  />}
                    keyExtractor={({id}) => String(id)}
                />
        </TelaPadrao>
    );
}