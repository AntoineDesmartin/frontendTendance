import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import format from 'date-fns/format';

export default function Event(props) {
    
    let membreInterrested= props.data.users.interUsers.length;
    
   
    // if pour les color si cest past or futur 
    let now = new Date();
    let date = new Date(props.data.date)
    let color = "blue";
    if(date<now){
        color="#d9d9d9";
    }



    // todo faire un switch pour les color des events




    return (
                    <View style={{...styles.event, backgroundColor:color}}> 
                        <View>
                            <Text style={styles.text}>{props.data.eventName}</Text>
                            <Text style={styles.text}>{props.data.address}</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>{format(new Date (props.data.hourStart), "HH'h'mm")} {format(new Date (props.data.hourEnd), "HH'h'mm")}</Text>
                            <Text style={styles.text}> {membreInterrested} intérésse</Text>
                        </View>
                    </View>
                    

    )
}


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
        // backgroundColor:"blue",
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