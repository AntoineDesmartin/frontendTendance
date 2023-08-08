// import React, { useState,useEffect } from 'react';
// import {
//   Image,
//   ImageBackground,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import photoProfil from "../assets/photoProfile.jpg"
// import photoBack from "../assets/photoBack.jpg"


// import Event from './components/Event';

// //Modal
// import {setOpenModal} from "../reducers/openModal"
// import Modale from './components/Modale';
// import {login,logout} from "../reducers/user"

// import { useDispatch, useSelector } from 'react-redux';
// import { setEvent } from '../reducers/event';
// import photoProfile from "../assets/photoProfile.jpg"



// export default function MessageScreen(props) {

//     const [addMessage,setAddMessage]=useState("");
//     const [messageDisplay,setMessageDisplay]=useState([])
    
//     // const openARoom = ()=>{
//     //     props.navigation.navigate('Message', { screen: 'MessageScreen' });
//     // }
   
//     const handleBack = ()=>{
//         props.navigation.goBack()
//     }

//     const handleSendAMessage = ()=>{
//         console.log("sent");
//         setMessageDisplay([...messageDisplay,addMessage])
        
//             const mesMessages=messageDisplay.map(data=>{
//                 return (
//                     <Text>{data.message}</Text>
//                 )
                
//             })
        
        
//     }




//     return(
//         <View style={styles.container}>

//             <TouchableOpacity onPress={()=>handleBack()} style={styles.goBack}>
//                 <Text>RETOUR mes Amis</Text>
//             </TouchableOpacity>

//             <Text>Discussion avec JOJO</Text>
//             <View style={{backgroundColor:"blue",margin:10}}>
//             {messageDisplay.length > 0 ? (
//                 messageDisplay.map((data, index) => (
//                     <View key={index} style={styles.viewMessage}>
//                        <Text >{data}</Text> 
//                     </View>
                    
//                 ))
//             ) : (
//                 <Text>Vous n'avez pas de message</Text>
//             )}
//             </View>
//             <TextInput placeholder="Enter Your Message" onChangeText={(value) => setAddMessage(value)} value={addMessage} style={styles.input} />
//             <TouchableOpacity style={styles.sendAMessage} onPress={()=>handleSendAMessage()}><Text>Envoyer un message</Text></TouchableOpacity>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//       flexGrow: 1,
//       backgroundColor: '#F9F9F9',
//       paddingHorizontal: 16,
//       paddingTop: Platform.OS === 'ios' ? 40 : 20,
//        alignItems:"center",
//         justifyContent:"center"
//     },
//     goBack:{
//         justifyContent:"flex-start",
//         alignSelf:"flex-start",
//         margin:20
//     },
//     listFriend:{
//         // alignItems:"center",
//         // justifyContent:"center"
//     },
//     friend:{
//         flexDirection:"row",
//         alignItems:"center",
//         justifyContent:'space-between',
//         backgroundColor:"red",
//         margin:10,
//         width:"90%"
//     },
//     image:{
//         width:50,
//         height:50,
//         borderRadius:30,
        
//     },
//     sendAMessage:{
//         width: 150,
//         height:30,
//         alignItems: 'center',
//         backgroundColor: '#ec6e5b',
//         borderRadius: 10,
        
//     },
//     viewMessage:{
//         height:20,
//         width:130,
        
//     },
//     input : {
//         backgroundColor:"yellow",
//         height:30,
//         width:130,
//         margin:10
//     }
// })


import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '177633738083-trf90o60tnrs74k6bcguk99unl4vp0s9.apps.googleusercontent.com',
//   offlineAccess: true,
// });

const MessageScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // const handleSignIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     setIsLoggedIn(true);
  //     setUserName(userInfo.user.name);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log('User cancelled the login flow.');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('Operation (e.g. sign in) is in progress already.');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('Play services not available or outdated.');
  //     } else {
  //       console.log('Something went wrong:', error.message);
  //     }
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {!isLoggedIn ? (
          <>
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.subheading}>Log in to your Google account to continue</Text>
            <View style={styles.divider} />
            <TouchableOpacity onPress={handleSignIn} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login with Google</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.heading}>Welcome {userName}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  content: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  loginButton: {
    padding: 10,
    backgroundColor: '#4285F4',
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MessageScreen;
