import React, { useState,useEffect } from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import photoProfile from "../assets/photoProfile.jpg"
import photoBack from "../assets/photoBack.jpg"


import Event from './components/event';

//Modal
import {setOpenModal} from "../reducers/openModal"
import Modale from './components/Modale';
import {login,logout} from "../reducers/user"

import { useDispatch, useSelector } from 'react-redux';
import { setEvent } from '../reducers/event';



export default function ProfileScreen(props) {

    
    const dispatch = useDispatch();
    // todo Gerer AMIS/MESSAGERIE/FAVORIS/PARAMETRE

    
    const user = useSelector((state)=>state.user.value); 


 const [futurEvents, setFuturEvents] = useState([]);
// const [pastEvents,setPastEvents] = useState([]);

useEffect(() => {
  if (user) {
    console.log("useEffect parti1");
    fetch('https://backend-tendance.vercel.app/user/mesEvents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idUser: user._id }),
    })
    .then(response => response.json())
    .then(data => {
        // console.log("data fetch profile event",data);
      const eventsFutur = data.map((data, index) => (
        
        <Pressable onPress={() => handlePress(data)} key={`futur-${index}`}>
          <Event data={data} />
        </Pressable>
        
      ));
      setFuturEvents(eventsFutur);

    
      
    });
  } else {
    console.log("useEffect parti2");
    dispatch(setOpenModal(true));
  }
}, [user]);

//   const eventsPast = data.map((data, index) => (
    //     <Pressable onPress={() => handlePress(data)} key={`past-${index}`}>
    //       <Event data={data} />
    //     </Pressable>
    //   ));
    //   setPastEvents(eventsPast);
        

//! Function _____________________________________________________________________________________________________________________________


    // const futurEvents = eventData.map((data,index)=>{
    //     let date = new Date(data.date);
    //     let now = new Date()
        
    //     if(date>now){
    //         return <Pressable onPress={()=>handlePress(data)} key={`futur-${index}`}>
    //             <Event data={data} ></Event>
    //             </Pressable>
    //     }
    // })

    
    // const pastEvents = eventData.map((data,index)=>{
    //     let date = new Date(data.date);
    //     let now = new Date()
        
    //     if(date<now){
    //         return <Pressable key={`past-${index}`} onPress={()=>handlePress(data)}><Event data={data} ></Event></Pressable>
    //     }
    // })






   
    const isModalOpen = useSelector((state)=>state.openModal.value)
    //! code pour les autres screen
    const handlePress = (data)=>{
        if(user===null){
            dispatch(setOpenModal(!isModalOpen))
        }else{
            props.navigation.navigate('Event', { screen: 'EventScreen' });
            dispatch(setEvent(data))
        } 
    }


    


// ! Return ___________________________________________________________________________________________________________________________
    
    return (
        user?(<View style={styles.container}>
            

           
            <View style={styles.viewPhotoBack}>
                <Image source={photoBack} style={styles.photoBack} size={100} />
                <Image source={photoProfile} style={styles.photoProfile} size={100} />
            </View>



           
            <View style={styles.viewParam}>
                
                <FontAwesome name="gears" size={30} color={"#1e064e"} />
            </View>
            
            <View style={styles.viewName}>
                <Text>{user.username}</Text>
            </View>
            


            
            <View style={styles.viewIcon}>
                <View style={styles.icon}>


                <TouchableOpacity onPress={()=>dispatch(logout())}><Text>LOGOUT</Text></TouchableOpacity>


                    <FontAwesome name="users" size={30} color={"#1e064e"} />
                    <Text style={styles.textIcon}>Mes amis</Text>
                </View>
            
                <View style={styles.icon}>
                    <FontAwesome name="rocket" size={30} color={"#1e064e"} />
                    <Text style={styles.textIcon}>Messagerie</Text>
                </View>
                
                <View style={styles.icon}>
                    <FontAwesome name="heart" size={30}  color={"#1e064e"}/>
                    <Text style={styles.textIcon}>Mes Favoris</Text>
                </View>
            </View>
            
            <ScrollView style={styles.events}>

                <View style={styles.futurEvents}>
                    <Text style={styles.text}> ____________________ Events ______________________</Text>
                    {futurEvents}
                </View>

                <View style={styles.pastEvents}>
                {/* <Text style={styles.text}>Evenement Passée _____________________________</Text> */}
                    {/* {pastEvents} */}
                </View>

                

                
            </ScrollView>
            

            
            
        </View>):(<View><Modale></Modale></View>)
    );
}



//! Style __________________________________________________________________________________________________________________________


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f2f2f2",
    //   alignItems: "center",
    },
    photoBack:{
        width:"100%",
        height:200
    },
    photoProfile:{
        alignSelf:"center",
        width:100,
        height:100,
        borderRadius:50,
        position:"absolute",
        // bottom:80,
        top:145

    },
    viewName:{
        alignSelf:"center",
        marginTop:15
    },
    viewParam:{
        alignSelf:"flex-end",
        margin:5
    },
    viewIcon: {
        flexDirection:"row",
        justifyContent:"space-around",
        marginBottom:15,
        marginTop:20
    },
    icon : {
        // backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center"
    },
    textIcon : {
        color:"#1e064e"
    },
    // ! EVENTS

    events:{
        // alignItems:"center",
        // justifyContent:"center",
        width:"100%",
        height:"auto",
        backgroundColor:"#1e064e",
        padding:10
    },
    event:{
        backgroundColor:"blue",
        // width:"80%",
        // width:300,
        height:50,
        borderRadius:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        margin:10
    },
    text:{
        color:"white",
        fontWeight:"bold"
    }

})