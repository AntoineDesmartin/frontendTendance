import React, { useState } from 'react';
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
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import photoEvent from '../assets/event.jpg'

import { useSelector,useDispatch } from 'react-redux';

import { resetEvent } from '../reducers/event';

export default function EventScreen(props) {

//todo ajouter les bonnes images de fond

const [isParticiped,setIsParticiped]=useState(false);
const [isInterrested,setIsInterrested]=useState(false);

const dispatch=useDispatch();
const dataEvent = useSelector((state) => state.event.value);
// console.log("data",dataEvent);


const date = dataEvent.date.slice(0,10)



//! Function

    const handleQuit = ()=>{
        dispatch(resetEvent())
        props.navigation.navigate('Profile', { screen: 'ProfileScreen' });
    }
    const handleParticipate = ()=>{
        
        setIsParticiped(!isParticiped)
        if(isParticiped){
            
            console.log("add parti");

            // dispatch(addParti());
        }else{
            
            console.log("delete parti");
            // dispatch(deleteParti());
        }
        
    }
    const handleInterrested = ()=>{
        setIsInterrested(!isInterrested)
        if(isInterrested){
            console.log("add inter");
            // dispatch(addInter());
        }else{
            console.log("delete inter");
            // dispatch(deleteInter());
        }
    }

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
    }
})