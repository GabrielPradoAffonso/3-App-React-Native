import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import estilos from './estilos'

import CampoInteiro from "../../../components/campoInteiro/index";
import Botao from "../../../components/Botao/index"

export default function Item({ nome, preco, descricao }) {
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    const inverterExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    }

    return (
        <>
            <TouchableOpacity style={estilos.informacao} onPress={inverterExpandir}>
                <Text style={estilos.nome}>{ nome }</Text>
                <Text style={estilos.descricao}>{ descricao }</Text>
                <Text style={estilos.preco}>{ 
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(preco)
                }</Text>
            </TouchableOpacity>
            {expandir &&
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
                    <Botao valor="Adicionar" acao={() => {}}/>
                </View>
            }
            <View style={estilos.divisor} />
        </>
    )
}
