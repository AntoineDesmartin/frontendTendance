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
import { useSelector,useDispatch } from 'react-redux';
import {setOpenModal} from "../../reducers/openModal"
import {login,logout} from "../../reducers/user"

export default function Modale() {
console.log("ModaleScreen");
// console.error("modale screen")
const isModalOpen = useSelector((state)=>state.openModal.value)
const dispatch=useDispatch()

const [mode,setMode]=useState("");
const [email,setEmail]=useState("");
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const handleSeConnecter = ()=>{

    let newUser = {username:username,email:email,password:password};
    fetch('http://10.0.1.104:3000/user/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
    }).then(response => response.json()).then(data => {

      console.log(data);
      console.log("bite");

      if(data.result){
          dispatch(login(data));
          dispatch(setOpenModal(false));
      }
      
    })
     

}
const handleSinscrire = ()=>{
  let newUser = {username:username,email:email,password:password};
    fetch('http://10.0.1.104:3000/user/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
    }).then(response => response.json()).then(data => {

      console.log(data);
      console.log("bite");
      
      if(data.result){
          dispatch(login(data));
          dispatch(setOpenModal(false));
      }
      
    })
}

return (
        <Modal visible={isModalOpen} animationType="fade" transparent>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                


               

                {mode==="" && <>
                <TouchableOpacity onPress={() => dispatch(setOpenModal(!isModalOpen))} style={styles.close} activeOpacity={0.8}>
                        <FontAwesome name="times" size={30} color={"#1e064e"} />    
                </TouchableOpacity>
                <Text>LOGO</Text>
                <View style={styles.viewButtonModal}>

                    <TouchableOpacity onPress={() => setMode("se connecter")} style={styles.buttonModal} activeOpacity={0.8}>
                        <Text style={styles.textButtonModal}>Se connecter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setMode("s'inscrire")} style={styles.buttonModal} activeOpacity={0.8}>
                        <Text style={styles.textButtonModal}>S'inscrire</Text>
                    </TouchableOpacity>

                </View>
                
                </>}

                

                {/* <TextInput placeholder="New place" onChangeText={(value) => setNewPlace(value)} value={newPlace} style={styles.input} /> */}
                {mode==="se connecter" && <>

                    <TouchableOpacity onPress={() => setMode("")} style={styles.close} activeOpacity={0.8}>
                            <FontAwesome name="times" size={30} color={"#1e064e"} />
                    </TouchableOpacity>

                    <TextInput placeholder="username" onChangeText={(value) => setUsername(value)} value={username} style={styles.input} />
                    <TextInput placeholder="Email" onChangeText={(value) => setEmail(value)} value={email} style={styles.input} />
                    <TextInput placeholder="password" onChangeText={(value) => setPassword(value)} value={password} style={styles.input} />

                    <TouchableOpacity onPress={() => handleSeConnecter()} style={styles.buttonModal} activeOpacity={0.8}>
                        <Text style={styles.textButtonModal}>Se connecter</Text>
                    </TouchableOpacity>
                </>}
                



                

                {mode==="s'inscrire" && <>

                    <TouchableOpacity onPress={() => setMode("")} style={styles.close} activeOpacity={0.8}>
                            <FontAwesome name="times" size={30} color={"#1e064e"} />
                    </TouchableOpacity>

                    <TextInput placeholderTextColor="grey" placeholder="username" onChangeText={(value) => setUsername(value)} value={username} style={styles.input} />
                    <TextInput placeholder="Email" onChangeText={(value) => setEmail(value)} value={email} style={styles.input} />
                    <TextInput placeholder="password" onChangeText={(value) => setPassword(value)} value={password} style={styles.input} />

                    <TouchableOpacity onPress={() => handleSinscrire()} style={styles.buttonModal} activeOpacity={0.8}>
                        <Text style={styles.textButtonModal}>S'inscrire</Text>
                    </TouchableOpacity>
                </>}
                
                
                


            </View>
        </View>
    </Modal>
)




}








//! Style ___________________________________________________________________________________________________________________________________

const styles = StyleSheet.create({
    
    //! Modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        // padding: 30,
        height:"40%",
        width:"80%",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      input: {
        margin:10,
        width: 150,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        
      },
      viewButtonModal:{
        // width:"100%",
        // height:"100%",
        // alignContent:"center",
        alignItems:"center",
        justifyContent:"center"
      },
      buttonModal: {
        width: 150,
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 8,
        backgroundColor: '#ec6e5b',
        borderRadius: 10,
      },
      textButtonModal: {
        color: '#ffffff',
        height: 24,
        fontWeight: '600',
        fontSize: 20,
      },
      close:{
        alignSelf:"flex-end",
        margin:15
      }
})