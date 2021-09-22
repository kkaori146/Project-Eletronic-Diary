import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Container = styled.View``;

const Texto = styled.Text``;

const Botao = styled.Button``;


export default () => {
    const navigation = useNavigation();

    return(
        <Container>
            <Texto>Tela de Listar</Texto>

            <Botao 
            title="Ir para Editar"
            onPress={()=>navigation.navigate('EditNote')}
            
            />

        </Container>
    );
}