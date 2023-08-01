import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function CardFilmes({titulo, nota,imagem}){

    const navigation = useNavigation();

    return(
        <TouchableOpacity style ={styles.containerFilmes}>

            <Image style ={styles.imagemFilme} source = {require(`../../Img/${imagem}`)}/>
            <Text style ={styles.tituloFilmes}> {titulo} </Text>
            <Text style ={styles.notaFilmes}> {nota} </Text>

        </TouchableOpacity>
    );  
}