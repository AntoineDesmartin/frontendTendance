import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


export default function PublishScreen() {

const [addresse,setAdresse]=useState("");
const [hoursStart,setHoursStart]=useState("");
const [hoursEnd,setHoursEnd]=useState("");
const [date,setDate]=useState("");
const [price,setPrice]=useState("");
const [description,setDescription]=useState("");

const [selectedOptionType, setSelectedOptionType] = useState(null);
const [selectedOptionAccess, setSelectedOptionAccess] = useState(null);

    const optionsType = [
      { id: 1, label: 'Art' },
      { id: 2, label: 'Music' },
      { id: 3, label: 'Food' },
      { id: 4, label: 'Nature' },
      { id: 5, label: 'Science' },
    ];
    const optionsAccess= [
        { id: 1, label: 'Prive' },
        { id: 2, label: 'Public' },
        
      ];
  
    const handleoptionsTypeSelect = (optionId) => {
        setSelectedOptionType(optionId);
    };
    const handleoptionsAccessSelect = (optionId) => {
        setSelectedOptionAccess(optionId);
    };

    return (
        <View style={styles.container}>
            <Text>Creer un Event</Text>

            <View style={styles.viewType} >
        {optionsAccess.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => handleoptionsAccessSelect(option.id)} 
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: selectedOptionAccess === option.id ? '#007BFF' : '#000',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {selectedOptionAccess === option.id && (
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#007BFF',
                  }}
                />
              )}
            </View>

            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

            <View style={styles.viewType} >
        {optionsType.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => handleoptionsTypeSelect(option.id)}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: selectedOptionType === option.id ? '#007BFF' : '#000',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {selectedOptionType === option.id && (
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#007BFF',
                  }}
                />
              )}
            </View>

            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
       
            <TextInput 
            placeholder="Adresse" 
            onChangeText={(value) => setAdresse(value)}
            value={addresse}
            style={styles.input} />

            <TextInput 
            placeholder="hoursStart" 
            onChangeText={(value) => setHoursStart(value)}
            value={hoursStart}
            style={styles.input} />

            <TextInput 
            placeholder="hoursEnd" 
            onChangeText={(value) => setHoursEnd(value)}
            value={hoursEnd}
            style={styles.input} />

            <TextInput 
            placeholder="date" 
            onChangeText={(value) => setDate(value)}
            value={date}
            style={styles.input} />

            <TextInput 
            placeholder="price" 
            onChangeText={(value) => setPrice(value)}
            value={price}
            style={styles.input} />

            <TextInput 
            placeholder="description" 
            onChangeText={(value) => setDescription(value)}
            value={description}
            style={styles.input} />

            
        </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f2f2f2",
      alignItems: "center",
    },
    viewType:{
        flexDirection:"row"
    }

})


// const RadioButton = () => {
//     const [selectedOptionType, setSelectedOption] = useState(null);
  
//     const optionsType = [
//       { id: 1, label: 'Option 1' },
//       { id: 2, label: 'Option 2' },
//       { id: 3, label: 'Option 3' },
//     ];
  
//     const handleoptionsTypeelect = (optionId) => {
//       setSelectedOption(optionId);
//     };
  
//     return (
    //   <View>
    //     {optionsType.map((option) => (
    //       <TouchableOpacity
    //         key={option.id}
    //         onPress={() => handleoptionsTypeelect(option.id)}
    //         style={{ flexDirection: 'row', alignItems: 'center' }}
    //       >
    //         <View
    //           style={{
    //             height: 24,
    //             width: 24,
    //             borderRadius: 12,
    //             borderWidth: 2,
    //             borderColor: selectedOptionType === option.id ? '#007BFF' : '#000',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //           }}
    //         >
    //           {selectedOptionType === option.id && (
    //             <View
    //               style={{
    //                 height: 12,
    //                 width: 12,
    //                 borderRadius: 6,
    //                 backgroundColor: '#007BFF',
    //               }}
    //             />
    //           )}
    //         </View>
    //         <Text style={{ marginLeft: 8 }}>{option.label}</Text>
    //       </TouchableOpacity>
    //     ))}
    //     <Text>Option sélectionnée : {selectedOptionType}</Text>
    //   </View>
//     );
//   };
  
//   export default RadioButton;
  