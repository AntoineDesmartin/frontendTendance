import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import photoEvent from '../assets/event.jpg'
import { useSelector,useDispatch } from 'react-redux';
import { resetEvent } from '../reducers/event';
import {setOpenModal} from "../reducers/openModal"
import Modale from './components/Modale';
import {addParticipant,removeParticipant,addInter,removeInter} from '../reducers/user';


export default function EventScreen(props) {

//todo ajouter les bonnes images de fond
// todo a verifier si les dispatch de user marche lorquon met en place le backEnds et les logins

const isModalOpen = useSelector((state)=>state.openModal.value)





//! Constant __________________________________________________________________________________________________________________________
//1 Verifie les dispatch
//2 Use effect dans Event Screen

const dataEvent = useSelector((state) => state.event.value);
// const user = useSelector((state) => state.user.value); //? a decomm

// On verifie si le user participe deja oui ou non a l'event
//? useEffect(() => {

// ?    if(user.events.interEvents.includes(dataEvent.id)){
// ?        setIsInterrested(true)
//  ?   }
//  ?   if(user.events.partEvents.includes(dataEvent.id)){
//  ?       setIsParticiped(true)
// ?    }

//?   }, []);


const [isParticiped,setIsParticiped]=useState(false); // todo Verifier si le user se trouve dans les particpant si oui mettre deja en true
const [isInterrested,setIsInterrested]=useState(false); // todo Verifier si le user se trouve dans les interresé si oui mettre deja en true
const dispatch=useDispatch();



const date = dataEvent.date.slice(0,10)





//! Function_________________________________________________________________________________________________________________________________

    const handleQuit = ()=>{
        dispatch(resetEvent())
        props.navigation.navigate('Profile', { screen: 'ProfileScreen' });
    }
    const handleParticipate = ()=>{
        setIsParticiped(!isParticiped)
        if(isParticiped){
            console.log("add parti");
            // dispatch(addParticipant(dataEvent.id));
            // todo Fetch Post Modifier la data Base
        }else{
            console.log("delete parti");
            // dispatch(removeParticipant(dataEvent.id));
            // todo Fetch Post Modifier la data Base
        }
        
    }
    const handleInterrested = ()=>{
        setIsInterrested(!isInterrested)
        if(isInterrested){
            console.log("add inter");
            // dispatch(addInter(dataEvent.id));
            // todo Fetch Post Modifier la data Base
        }else{
            console.log("delete inter");
            // dispatch(removeInter(dataEvent.id));
            // todo Fetch Post Modifier la data Base
        }
    }





// ! Return_____________________________________________________________________________________________________________________________________

    return (
        <View style={styles.container}>



            <View style={styles.viewIcon}>
            <FontAwesome name="user" size={30} color={"#1e064e"} /> 
                <Pressable onPress={()=>handleQuit()}><FontAwesome name="times" size={30} color={"#1e064e"} /></Pressable> 
            </View>
            

            <Image source={photoEvent} style={styles.photoEvent} />

            <View style={styles.viewText}>
                <Text style={styles.name}>{dataEvent.creator}</Text>
                <Text style={styles.site}>{dataEvent.website}</Text> 
                <Text style={styles.type}>{dataEvent.type}</Text>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.horraire}>{dataEvent.hourStart}-{dataEvent.hourEnd}</Text>
                <Text style={styles.adresse}>{dataEvent.address}</Text>
                <Text style={styles.prix}>Entrée : {dataEvent.price}$</Text>
            </View>

            <View style={styles.viewButton}>
                <Pressable style={{ ...styles.button,backgroundColor: isParticiped ? '#1e064e' : 'white'}} onPress={()=>handleParticipate()}>
                    <Text style={{color: isParticiped ? 'white' : '#1e064e',fontWeight:"bold",fontSize:20}}>Je participe</Text>
                </Pressable>
                <View 
        ></View>
                <Pressable style={{ ...styles.button,backgroundColor: isInterrested ? '#1e064e' : 'white'}} onPress={()=>handleInterrested()}>
                    <Text style={{color: isInterrested ? 'white' : '#1e064e',fontWeight:"bold",fontSize:20}}>Interressé</Text>
                </Pressable>
            </View>
            
        </View>
    );
}



//! Style ___________________________________________________________________________________________________________________________________
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f2f2f2",
    },
    photoEvent:{
        width:"100%",
        height:250
    },
    viewIcon:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:20
    },
    viewText:{
        margin:10,
        alignItems:"center"
       
    },
    name:{
        fontWeight:"bold",
        fontSize:40,
        margin:5,
        },
    site : {
        fontWeight:"bold",
        color:"#b77fff",
        margin:5,
    },
    type:{
        fontWeight:"bold",
        fontSize:20,
        margin:5,
    },
    date:{
        fontWeight:"bold",
        fontSize:20,
        margin:5,
    },
    adresse:{
        fontWeight:"bold",
        fontSize:20,
        margin:5
    },
    prix:{
        fontWeight:"bold",
        fontSize:20,
        margin:5,
    },
    horraire:{
        fontWeight:"bold",
        fontSize:20,
        margin:5,
    },
    viewButton:{
        flexDirection:"row",
        alignItems:"center",
        alignContent:"center",
        justifyContent:'center'
    },
    button : {
        textAlign:"center",
        alignContent:"center",
        justifyContent:"center",
        width:130,
        height:40,
        
        margin:10,
        borderRadius:10
    },
})