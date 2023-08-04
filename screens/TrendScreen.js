

import React,{useEffect,useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import format from 'date-fns/format';
import fr from 'date-fns/locale';

//modale
import {setOpenModal} from "../reducers/openModal"
import Modale from './components/Modale';
import formatDateToFrenchLocale from './components/formatageList';

import {login,logout} from "../reducers/user"
import { useDispatch, useSelector } from 'react-redux';
import { setEvent } from '../reducers/event';

export default function TrendScreen(props) {

const [top,setTop]=useState("")

//! on gere la modale connection en dessous_____________________________________________________________________
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.value); 
    const isModalOpen = useSelector((state)=>state.openModal.value)

    const handlePress = (data)=>{
        if(user===null){
            dispatch(setOpenModal(!isModalOpen))
        }else{
            props.navigation.navigate('Event', { screen: 'EventScreen' });
            dispatch(setEvent(data))
        } 
    }
//! on gere la modale connection au dessus_____________________________________________________________________


//! on fetch les events (normalement fais des le depart)
//! on modifie on gere le reducer par ordre
const events = useSelector((state)=>state.events.value);


useEffect(() => { //! qui va trier les events 10 les plus cotés

  
  const sortedEvents = events.slice().sort(function (a, b) {
    console.log("a :",a.users.interUsers.length);
    console.log("b :",b.users.interUsers.length);
    return a.users.interUsers.length - b.users.interUsers.length;
  });
  
  // Garde les 10 premiers éléments triés
  const resultat = sortedEvents.slice(0, 10);
  // console.log("resultat",resultat);
  setTop(resultat);
  
  // Affiche la longueur de "partUsers" pour les 10 premiers éléments triés
  console.log("_______________________________");
 
  // sortedEvents.forEach(data => {
  //   console.log(data.users.partUsers.length);
  // });


    }, []);
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Modale></Modale>
      {!top?<View><Text>Bite</Text></View>:top.map((event, index) => (

        <TouchableOpacity onPress={()=>handlePress(event)} key={index} style={styles.eventBlock}>
          <Image source={require('../assets/campusfrance2017-21.jpg')} style={styles.eventImage} />
          <Text style={styles.eventDate}>{formatDateToFrenchLocale(event.date.slice(0, 10))}</Text>
          <Text style={styles.eventTime}>
            {format(new Date (event.hourStart), "HH'h'mm")} - {format(new Date (event.hourEnd), "HH'h'mm")}
          </Text>
          <Text style={styles.eventName}>{event.eventName}</Text>
          <Text style={styles.eventCreator}>Par {event.creator}</Text>
          <Text style={styles.eventAddress}>{event.address}</Text>
          <Text>Nombre interresé : {event.users.partUsers.length}</Text>
          <View style={styles.buttonsContainer}>
            
          </View>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
  },
  eventBlock: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventImage: {
    width: '100%',
    height: 200, // Ajustez la hauteur de l'image selon vos besoins
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventTime: {
    fontSize: 14,
    color: '#666',
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  eventCreator: {
    fontSize: 14,
    color: '#666',
  },
  eventAddress: {
    fontSize: 14,
    color: '#666',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  interestedButton: {
    flex: 1,
    backgroundColor: '#E91E63',
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 5,
  },
  participateButton: {
    flex: 1,
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    borderRadius: 8,
    marginLeft: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },
});


