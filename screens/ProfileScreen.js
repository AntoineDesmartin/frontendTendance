import React, { useState } from 'react';
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


import Event from './components/Event';

//Modal
import {setOpenModal} from "../reducers/openModal"
import Modale from './components/Modale';


import { useDispatch, useSelector } from 'react-redux';
import { setEvent } from '../reducers/event';
// import { Dispatch } from 'react';


export default function ProfileScreen(props) {
    const eventData = [{
        creator: 'joan',
        eventName: 'SJparty',
        type: 'music',
        date: '2023-08-03T09:32:34.633Z',
        hourStart: '22:45',
        hourEnd: '01:45',
        address: '35 rue de Marseille 69007 Lyon',
        price: 'Gratuit',
        website: 'linktr.ee/sacrejojo69',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: {
            interUsers: ['001', '002', '003', '004'],
            partUsers: ['005', '006', '007', '008'],
        },
    }, {
        creator: 'nico',
        eventName: 'TacosMania',
        type: 'food',
        date: '2023-08-03T09:32:34.633Z',
        hourStart: '19:45',
        hourEnd: '22:45',
        address: '26 Rue de Marseille 69007 Lyon',
        price: '10',
        website: 'https://www.kebab-frites.com/kebab/uskudar-lyon-7.html',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: {
            interUsers: ['001', '002', '003', '004'],
            partUsers: ['005', '006', '007', '008','09','10'],
        },
    }, 
    {
        creator: 'mich',
        eventName: 'ExpoMeme23',
        type: 'art',
        date: '2023-07-31T09:32:34.633Z',
        hourStart: '22:45',
        hourEnd: '05:45',
        address: '20 Place des Terreaux 69001 Lyon',
        price: '5',
        website: 'https://www.mba-lyon.fr/fr',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: {
            interUsers: ['001', '002'],
            partUsers: ['003', '004','005', '009'],
        },
    }, {
        creator: 'adri',
        eventName: 'Marathon de Lyon',
        type: 'sport',
        date: '2023-07-31T09:32:34.633Z',
        hourStart: '05:45',
        hourEnd: '22:45',
        address: 'Place Bellecour 69002 Lyon',
        price: '25',
        website: 'https://www.runinlyon.com/fr',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: {
            interUsers: ['001', '002'],
            partUsers: ['003', '004','005', '006', '008'],
        },
    }, {
        creator: 'ines',
        eventName: 'Les Matins de la Cartographie',
        type: 'science',
        date: '2023-07-31T09:32:34.633Z',
        hourStart: '05:45',
        hourEnd: '11:45',
        address: 'Place de la Nation, 69120 Vaulx-en-Velin',
        price: '10',
        website: 'https://www.planetariumvv.com/',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: {
            interUsers: ['001', '002'],
            partUsers: ['003', '004','005', '006'],
        },
    }, {
        creator: 'tone',
        eventName: 'La Pêche au Harpon',
        type: 'nature',
        date: '2023-07-31T09:32:34.633Z',
        hourStart: '05:45',
        hourEnd: '00:45',
        address: 'Rue de Créqui 69006 Lyon',
        price: '55',
        website: 'https://www.snsm.org/conseils/conseils-loisirs-nautiques/peche-sous-marine-pratique-et-reglementation',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: {
            interUsers: ['001', '002'],
            partUsers: ['003', '004','005', '006'],
        },
    }, {
        creator: 'max',
        eventName: 'DemodayBatch89-LaCapsuleGrooveCamp',
        type: 'science',
        date: '2023-07-31T09:32:34.633Z',
        hourStart: '14:45',
        hourEnd: '16:45',
        address: '35 rue de Marseille 69007 Lyon',
        price: '10',
        website: 'https://now-coworking.com/',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: {
            interUsers: ['001', '002', '009', '010'],
            partUsers: ['003', '004','005', '006', '007', '008'],
        },
    }, 
    {
        creator: 'user',
        eventName: '???',
        type: 'science',
        date: '2023-07-31T09:32:34.633Z',
        hourStart: '00:45',
        hourEnd: '03:45',
        address: '35 rue de Marseille 69007 Lyon',
        price: 'Gratuit',
        website: '',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: {
            interUsers: ['003', '004','005', '006', '007', '008', '001', '002', '009', '010'],
            partUsers: [],
        },
    }, 
    {
        creator: 'user',
        eventName: 'TekTek69event',
        type: 'music',
        date: '2023-07-31T09:32:34.633Z',
        hourStart: '21:45',
        hourEnd: '03:45',
        address: 'rue de Sèze 69006 Lyon',
        price: '3',
        website: '',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: {
            interUsers: ['003', '004','005', '006', '007', '008', '001', '002', '009', '010'],
            partUsers: [],
        },
    }, 
    {
        creator: 'user',
        eventName: 'GymTonic2000',
        type: 'sport',
        date: '2023-07-31T09:32:34.633Z',
        hourStart: '07:45',
        hourEnd: '08:45',
        address: 'rue de Sèze 69006 Lyon',
        price: '3',
        website: '',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: {
            interUsers: ['003', '004','005', '006', '002', '009', '010'],
            partUsers: ['007', '008', '001'],
        },
    }];
    
    
    // todo Gerer AMIS/MESSAGERIE/FAVORIS/PARAMETRE

    // todo un useEffect qui fetch tous les events auxquelles le user participes avec un populate dans le back

    const dispatch = useDispatch();
   
//! Function _____________________________________________________________________________________________________________________________


    const futurEvents = eventData.map((data,index)=>{
        let date = new Date(data.date);
        let now = new Date()
        
        if(date>now){
            return <Pressable onPress={()=>handlePress(data)}>
                <Event data={data} key={index}></Event>
                </Pressable>
        }
    })
    const pastEvents = eventData.map((data,index)=>{
        let date = new Date(data.date);
        let now = new Date()
        
        if(date<now){
            return <Pressable onPress={()=>handlePress(data)}><Event data={data} key={index}></Event></Pressable>
        }
    })





//! Code qui permet de verifier si l'utilisateur est connecter si non on ouvre la modal
     // const user = useSelector((state)=>state.user.value); //? a decommmenter lorsque le reducer user fonctionne

     const user = null;
     // const user ="notnull";
    const isModalOpen = useSelector((state)=>state.openModal.value)
    const handlePress = (data)=>{
        if(user===null){
            console.log("object");
            dispatch(setOpenModal(!isModalOpen))
            
            
        }else{
            props.navigation.navigate('Event', { screen: 'EventScreen' });
            dispatch(setEvent(data))
        } 
    }


    


// ! Return ___________________________________________________________________________________________________________________________

    return (
        <View style={styles.container}>

{/* ________________________Pour ouvrir la modale si nous sommes pas connecté_________________ */}
            {isModalOpen && <Modale></Modale>} 
{/* __________________________________________________________________________________________ */}




            {/* Photo de back------------------------------------------------------------------------ */}
            <View style={styles.viewPhotoBack}>
                <Image source={photoBack} style={styles.photoBack} size={100} />
                <Image source={photoProfile} style={styles.photoProfile} size={100} />
            </View>



            {/* Photo de Profile--------------------------------------------------------------------*/}
            <View style={styles.viewParam}>
                
                <FontAwesome name="gears" size={30} color={"#1e064e"} />
            </View>
            
            <View style={styles.viewName}>
                <Text>Mr Tone</Text>
            </View>
            


            {/* Bar Icon---------------------------------------------------------------------------- */}
            <View style={styles.viewIcon}>
                <View style={styles.icon}>
                
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
                    <Text style={styles.text}>Evenement a venir _____________________________</Text>
                    {futurEvents}
                </View>

                <View style={styles.pastEvents}>
                <Text style={styles.text}>Evenement Passée _____________________________</Text>
                    {pastEvents}
                </View>

                

                {/* <Text style={styles.text}>Aucun Events</Text> */}
            </ScrollView>
            

            
            
        </View>
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