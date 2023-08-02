import React, { useState,useEffect } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { DatePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Modale from "./components/Modale";
import {setOpenModal} from "../reducers/openModal"


export default function PublishScreen() {
  //todo style mieux !
  // todo Price gerer mieux mettre un input correct
  // todo Status Bar et KeyboardAvoidinView
  // todo ajouter Amis
  // todo Acceder a la galerie
  // todo Publier

  const [name, setName] = useState("");
  const [addresse, setAdresse] = useState("");
  const [hourStart, setHourStart] = useState(new Date());
  const [hourEnd, setHourEnd] = useState(new Date());
  //const [date, setDate] = useState(new Date());
  const [dateText, setDateText] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimeStartPicker, setShowTimeStartPicker] = useState(false);
  const [showTimeEndPicker, setShowTimeEndPicker] = useState(false);
  const [selectedOptionType, setSelectedOptionType] = useState(null);
  const [selectedOptionAccess, setSelectedOptionAccess] = useState(null);

  // Afficher si event publish ou pas 
  const [affiche,setAffiche]=useState(true);
  

const dispatch =useDispatch()
// Afiiche Modale 
useEffect(() => {
  if (user) {
    console.log("useEffect parti1");
    
  } else {
    console.log("useEffect parti2");
    dispatch(setOpenModal(true));
  }
}, [user]);















  const optionsType = [
    { id: 1, label: "Art" },
    { id: 2, label: "Music" },
    { id: 3, label: "Food" },
    { id: 4, label: "Nature" },
    { id: 5, label: "Science" },
  ];
  const optionsAccess = [
    { id: 1, label: "Prive" },
    { id: 2, label: "Public" },
  ];

  const handleoptionsTypeSelect = (optionId) => {
    setSelectedOptionType(optionId);
  };
  const handleoptionsAccessSelect = (optionId) => {
    setSelectedOptionAccess(optionId);
  };

  // ! dateeeeeeeeeeeeee
  const [selectedDate, setSelectedDate] = useState(new Date());

  const toggleDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selected) => {
    if (selected) {
      setSelectedDate(selected);
      const formattedDate = selected.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setDateText(formattedDate);
      setShowDatePicker(false);
    }
  };

  //Affichage du calendrier en Android
  const showAndroidDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: selectedDate,
        mode: "calendar",
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        handleDateChange(null, selectedDate);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };

  const hideDatePicker = () => {
    setShowDatePicker(false);
  };

  //! timeeeeeeeeeeeeeeeeeeeeeeeee
  const toggleTimeStartPicker = () => {
    setShowTimeStartPicker(true);
  };

  const handleTimeStartChange = (event, selected) => {
    if (selected) {
      setHourStart(selected);
    }
    setShowTimeStartPicker(false);
  };

  const toggleTimeEndPicker = () => {
    setShowTimeEndPicker(true);
  };

  const handleTimeEndChange = (event, selected) => {
    if (selected) {
      setHourEnd(selected);
    }
    setShowTimeEndPicker(false);
  };

  const hideTimePicker = () => {
    setShowTimeStartPicker(false);
    setShowTimeEndPicker(false);
  };

  // publier
  // creator: 'user',
  // 	eventName: 'GymTonic2000',
  //     type: 'sport',
  //     date: '2023-11-11',
  //     hourStart: '07:45',
  //     hourEnd: '08:45',
  //     address: 'rue de Sèze 69006 Lyon',
  //     price: '3',
  //     website: '',
  //     description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
  //     eventCover: '',

const user = useSelector((state) => state.user.value);

  const handlePublish = () => {
    let type;
    switch (selectedOptionType) {
      case 1:
        type = "Art";
        break;
      case 2:
        type = "Music";
        break;
      case 3:
        type = "Food";
        break;
      case 4:
        type = "Nature";
        break;
      case 5:
        type = "Science";
        break;
    }
    let access;
    switch (selectedOptionAccess) {
      case 1:
        access = "Privée";
        break;
      case 2:
        access = "Public";
        break;
    }

    let event = {
      creatorName: user._id,
      eventName: name,
      type: type,
      access:access,
      date: selectedDate,
      hourStart: hourStart,
      hourEnd: hourEnd,
      address: addresse,
      price: price,
      description: description,
      eventCover: "",
      amis: "",
      latitude:null,
      longitude:null
    };
    // {"access": "Privée", "address": "Paris", "amis": "", "creator": "64c9035431ebd1b0f73873ee", "date": "2023-08-03T08:57:00.000Z", "description": "", "eventCover": "", "eventName": "a", "hourEnd": "2023-08-02T09:57:00.000Z", "hourStart": "2023-08-02T08:57:21.230Z", "price": "12", "type": "Food"}
    console.log("event",event);
    // todo fetch post pour publier dans la data ...
    setAffiche(false)
    // /publishEvent
    fetch('https://backend-tendance.vercel.app/events/publishEvent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(event),
                }).then(response => response.json()).then(data => {
                    console.log("pas mal",data); // je renvoie {"result": true}
                })

   
  };

  return (
    !user?(<View><Modale></Modale></View>):affiche?
    (<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.container}>
      <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" />
      <Text style={styles.title}>Créer un event</Text>

      {/* Bouton sélection date calendrier */}

      <View style={styles.selectDate}>
        <TouchableOpacity onPress={toggleDatePicker}>
          <FontAwesome name="calendar" size={30} color={"#1e064e"} />
        </TouchableOpacity>
        <Text>{dateText ? dateText : "Sélectionner une date"}</Text>
      </View>

      {/* condition de rendu du date picker en fonction du système ios ou android */}
      {showDatePicker && Platform.OS === "ios" && (
        <DateTimePicker value={selectedDate} mode="date" display="default" onChange={handleDateChange} />
      )}

      {showDatePicker && Platform.OS === "android" && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={handleDateChange}
          onDismiss={hideDatePicker}
        />
      )}

      <View style={styles.selectTime}>
        <TouchableOpacity onPress={toggleTimeStartPicker}>
          <FontAwesome name="rocket" size={30} color={"#1e064e"} />
        </TouchableOpacity>
        <Text>
          {hourStart ? `Heure de début : ${hourStart.getHours()}:${hourStart.getMinutes()}` : "Choisir l'heure de début"}
        </Text>
      </View>

      {showTimeStartPicker && (
        <DateTimePicker
          value={hourStart || new Date()}
          mode="time"
          display="default"
          onChange={handleTimeStartChange}
        />
      )}
      
      <View style={styles.selectTime}>
      <TouchableOpacity onPress={toggleTimeEndPicker}>
        <FontAwesome name="times" size={30} color={"#1e064e"} />
      </TouchableOpacity>
      <Text>
          {hourEnd ? `Heure de fin : ${hourEnd.getHours()}:${hourEnd.getMinutes()}` : "Choisir l'heure de fin"}
        </Text>
      </View>


      {showTimeEndPicker && (
        <DateTimePicker value={hourEnd || new Date()} mode="time" display="default" onChange={handleTimeEndChange} />
      )}

      <View style={styles.viewAccess}>
        {optionsAccess.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => handleoptionsAccessSelect(option.id)}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: selectedOptionAccess === option.id ? "#007BFF" : "#000",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedOptionAccess === option.id && (
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: "#007BFF",
                  }}
                />
              )}
            </View>

            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text>_________________________________</Text>

      <View style={styles.viewType}>
        {optionsType.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => handleoptionsTypeSelect(option.id)}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: selectedOptionType === option.id ? "#007BFF" : "#000",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedOptionType === option.id && (
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: "#007BFF",
                  }}
                />
              )}
            </View>

            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput placeholder="Name" onChangeText={(value) => setName(value)} value={name} style={styles.input} />

      <TextInput
        placeholder="Adresse"
        onChangeText={(value) => setAdresse(value)}
        value={addresse}
        style={styles.input}
      />

      <TextInput placeholder="price" onChangeText={(value) => setPrice(value)} value={price} style={styles.input} />

      <TextInput
        placeholder="description"
        onChangeText={(value) => setDescription(value)}
        value={description}
        style={styles.input}
      />

      {/* <View style={styles.viewAjout}>
        <TouchableOpacity style={styles.btnAjout}>
          <View style={styles.plus}>
            <FontAwesome name="plus" size={15} color={"#1e064e"} />
          </View>
          <Text>Ajouter des amis</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAjout}>
          <View style={styles.plus}>
            <FontAwesome name="plus" size={15} color={"#1e064e"} />
          </View>
          <Text>Ajouter une photo</Text>
        </TouchableOpacity>
      </View> */}

      <TouchableOpacity style={styles.btnPublier} onPress={() => handlePublish()}>
        <Text> Publier</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>):(<View style={styles.container}>
          <Text>Evenement Publer !</Text>
          <TouchableOpacity onPress={()=>setAffiche(true)} style={styles.btnPublier}><Text>Publier de nouveau !</Text></TouchableOpacity>
      </View>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "blue",
  },
  viewAccess: {
    width: "100%",
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-around",
  },
  viewType: {
    width: "100%",
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-around",
  },
  input: {
    margin: 10,
    padding: 10,
    backgroundColor: "red",
  },
  viewAjout: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  btnAjout: {
    // backgroundColor:"red",
    margin: 30,
    padding: 5,
    alignItems: "center",
    borderRadius: 8,
  },
  plus: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  btnPublier: {
    backgroundColor: "red",
    // margin:30,
    height: 40,
    width: 100,
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  time: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "red",
    alignContent: "center",
    justifyContent: "space-around",
    margin: 10,
  },
  date: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    margin: 10,
  },
  dateInput: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 16,
  },
});
