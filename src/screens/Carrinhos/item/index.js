import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import estilos from './estilos'

import CampoInteiro from "../../../components/campoInteiro/index";
import Botao from "../../../components/Botao/index"

export default function Item({ nome, preco, descricao, quantidade : quantidadeInicial }) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    return (
        <>
            <View  style={estilos.informacao}>
                <Text style={estilos.nome}>{ nome }</Text>
                <Text style={estilos.descricao}>{ descricao }</Text>
                <Text style={estilos.preco}>{ 
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(preco)
                }</Text>
            </View>
                <View style={estilos.carrinho}>
                    <View>
                        <View style={estilos.valor}>
                            <Text style={estilos.descricao}>Quantidade:</Text>
                            <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} />
                        </View>
                        <View style={estilos.valor}>
                            <Text style={estilos.descricao}>Preço:</Text>
                            <Text style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                    style: 'currency', currency: 'BRL'
                                }).format(total)
                            }</Text>
                        </View>
                    </View>
                    <Botao valor="Remover do carrinho" acao={() => {}}/>
                </View>
            <View style={estilos.divisor} />
        </>
    )
}
