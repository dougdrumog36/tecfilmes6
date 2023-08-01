import { StyleSheet, Text, View, FlatList } from 'react-native';

import BannerFilmes from '../../components/bannerFilmes';

import Filmes from '../../data/movies';

import Series from '../../data/series'

import Header from '../../components/header';

import { SearchBar } from 'react-native-screens';

import CardFilmes from '../../components/cardFilmes';

import CardSeries from '../../components/cardSeries';




export default function App() {

  return (

    <View style={styles.container}>

      <Header></Header>

      <SearchBar></SearchBar>

      <BannerFilmes></BannerFilmes>




      <Text style = {styles.textBanner}> Filmes </Text>




      <View style={{width:"90%"}}>

        <FlatList

        horizontal={true}

        showsHorizontalScrollIndicator={false}

        data={Filmes}

        keyExtractor={(item) => item.id}

        renderItem = { ({item}) => (




          <CardFilmes




            titulo = {item.nome}

            nota = {item.nota}

            imagem = {item.imagem}




          />




        )}

        




        />

      </View>




      <Text style = {styles.textBanner}> Series </Text>




      <View style={{width:"90%"}}>

        <FlatList

        horizontal={true}

        showsHorizontalScrollIndicator={false}

        data={Series}

        keyExtractor={(item) => item.id}

        renderItem = { ({item}) => (




          <CardSeries




            titulo = {item.nome}

            nota = {item.nota}

            imagem = {item.imagem}




          />




        )}

        




        />

      </View>

    </View>

  );

}




const styles = StyleSheet.create({

  container: {

    flex:1,

    backgroundColor: '#141a29',

    alignItems:"center"

    

    

  },

  textBanner:{

    fontSize:30,

    color:'white',

    marginTop:15,

    marginLeft:-270,

    fontWeight:'Bold'

}

});