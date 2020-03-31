import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import{ View, Image, Text, FlatList ,TouchableOpacity} from  'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function incidents(){
    const navigation = useNavigation();

    function navigationToDetail(){
        navigation.navigate('Detail');
    }

   return (
       <View style={styles.container}>
           <View style={styles.headerText}> 
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text 
                                style={styles.headerTextbold} >0 casos</Text>
                </Text>
           </View>

           <Text style={styles.title}>Bem vindo</Text>
           <Text style={styles.description}>
               Escolha um dos casos abaixo e salve o dia
           </Text>

           <FlatList 
                data={[]}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incidents}>
                    <Text style={styles.incidentsProperty}>Caso</Text>
                    <Text style={styles.incidentsValeu}> cadelib</Text>
 
                    <Text style={styles.incidentsProperty}>Descrição</Text>
                    <Text style={styles.incidentsValeu}> fsadfafasfsa</Text>
 
                    <Text style={styles.incidentsProperty}>Valor</Text>
                    <Text style={styles.incidentsValeu}> R$ 120,00</Text>
 
                    <TouchableOpacity 
                         style={styles.detailButton}
                         onPress={navigationToDetailnpm}
                     >
                         <Text style={styles.dateilButtonText}>Ver mais detalhes</Text>
                         <Feather name="arrow-right" size={16} color="#E02041" />                     
                    </TouchableOpacity>
                </View>

                )}

           />
       </View>
   );
}