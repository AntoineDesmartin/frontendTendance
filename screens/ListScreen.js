import React, { useState } from "react";
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
  Pressable,
  ScrollView,
} from "react-native";

import { useDispatch } from "react-redux";
import { setEvent } from "../reducers/event";
import dateList from "./components/dateList";
import formatDate from "./components/formatDate";
import formatDateToFrenchLocale from "./components/formatageList";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { string } from "prop-types";

//ToDo
//- function pour trier la data des events par Date et la classer dans des tableaux
//- faire un mapping des tableaux des Date

//data ------------------------



const userData = [
  {
    id: "001",
    token: "a01",
    username: "joan",
    mail: "jo123@g.com",
    password: "123",
    profilPic: "",
    coverPic: "",
    events: {
      interEvents: ["a0", "a1", "a3"],
      partEvents: ["a0", "a1", "a3"],
    },
  },
  {
    id: "002",
    token: "a02",
    username: "ines",
    mail: "ines123@g.com",
    password: "123",
    profilPic: "",
    coverPic: "",
    events: {
      interEvents: ["a0", "a1", "a3"],
      partEvents: ["a0", "a1", "a3"],
    },
  },
  {
    id: "003",
    token: "a03",
    username: "aaron",
    mail: "aaron123@g.com",
    password: "123",
    profilPic: "",
    coverPic: "",
    events: {
      interEvents: ["a0", "a1", "a3"],
      partEvents: ["a0", "a1", "a3"],
    },
  },
  {
    id: "004",
    token: "a04",
    username: "tone",
    mail: "tone123@g.com",
    password: "123",
    profilPic: "",
    coverPic: "",
    events: {
      interEvents: ["a0", "a1", "a3"],
      partEvents: ["a0", "a1", "a3"],
    },
  },
  {
    id: "005",
    token: "a05",
    username: "user",
    mail: "user123@g.com",
    password: "123",
    profilPic: "",
    coverPic: "",
    events: {
      interEvents: ["a0", "a1", "a3"],
      partEvents: ["a0", "a1", "a3"],
    },
  },
  {
    id: "006",
    token: "a06",
    username: "meh",
    mail: "meh123@g.com",
    password: "123",
    profilPic: "",
    coverPic: "",
    events: {
      interEvents: ["a0", "a1", "a3"],
      partEvents: ["a0", "a1", "a3"],
    },
  },
  {
    id: "007",
    token: "a07",
    username: "max",
    mail: "max123@g.com",
    password: "123",
    profilPic: "",
    coverPic: "",
    events: {
      interEvents: ["a0", "a1", "a3"],
      partEvents: ["a0", "a1", "a3"],
    },
  },
  {
    id: "008",
    token: "a08",
    username: "adri",
    mail: "adri123@g.com",
    password: "123",
    profilPic: "",
    coverPic: "",
    events: {
      interEvents: ["a0", "a1", "a3"],
      partEvents: ["a0", "a1", "a3"],
    },
  },
  {
    id: "009",
    token: "a09",
    username: "mich",
    mail: "mich123@g.com",
    password: "123",
    profilPic: "",
    coverPic: "",
    events: {
      interEvents: ["a0", "a1", "a3"],
      partEvents: ["a0", "a1", "a3"],
    },
  },
  {
    id: "010",
    token: "a10",
    username: "nico",
    mail: "nico123@g.com",
    password: "123",
    profilPic: "",
    coverPic: "",
    events: {
      interEvents: ["a0", "a1", "a3"],
      partEvents: ["a0", "a1", "a3"],
    },
  },
];
//-------------------------------- début de la fonction

export default function ListScreen({ navigation }) {
  const [research, setResearch] = useState(""); // état pour initialiser la recherche en Input

  const handleSearch = () => {
    setResearch("");
  };

  const handleSubmit = () => {
    navigation.navigate("TabNavigator", { screen: "TabNavigator" });
    // constante pour rejoindre la map au onPress
  };

  const dispatch = useDispatch();

  const handlePress = (data) => {
    navigation.navigate("Event", { screen: "EventScreen" });
    dispatch(setEvent(data));
  };

  const eventData = [
    {
      creator: "joan",
      eventName: "SJparty",
      type: "music",
      date: "2023-07-01",
      hourStart: "22:45",
      hourEnd: "01:45",
      address: "35 rue de Marseille 69007 Lyon",
      price: "Gratuit",
      website: "linktr.ee/sacrejojo69",
      description:
        "Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.",
      eventCover: "",
      users: {
        interUsers: ["001", "002", "003", "004"],
        partUsers: ["005", "006", "007", "008"],
      },
    },
    {
      creator: "nico",
      eventName: "TacosMania",
      type: "food",
      date: "2023-08-09",
      hourStart: "19:45",
      hourEnd: "22:45",
      address: "26 Rue de Marseille 69007 Lyon",
      price: "10",
      website: "https://www.kebab-frites.com/kebab/uskudar-lyon-7.html",
      description:
        "Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.",
      eventCover: "",
      users: {
        interUsers: ["001", "002", "003", "004"],
        partUsers: ["005", "006", "007", "008", "09", "10"],
      },
    },
    {
      creator: "mich",
      eventName: "ExpoMeme23",
      type: "art",
      date: "2023-08-01",
      hourStart: "22:45",
      hourEnd: "05:45",
      address: "20 Place des Terreaux 69001 Lyon",
      price: "5",
      website: "https://www.mba-lyon.fr/fr",
      description:
        "Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.",
      eventCover: "",
      users: {
        interUsers: ["001", "002"],
        partUsers: ["003", "004", "005", "009"],
      },
    },
    {
      creator: "adri",
      eventName: "Marathon de Lyon",
      type: "sport",
      date: "2023-09-13",
      hourStart: "05:45",
      hourEnd: "22:45",
      address: "Place Bellecour 69002 Lyon",
      price: "25",
      website: "https://www.runinlyon.com/fr",
      description:
        "Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.",
      eventCover: "",
      users: {
        interUsers: ["001", "002"],
        partUsers: ["003", "004", "005", "006", "008"],
      },
    },
    {
      creator: "ines",
      eventName: "Les Matins de la Cartographie",
      type: "science",
      date: "2023-09-13",
      hourStart: "05:45",
      hourEnd: "11:45",
      address: "Place de la Nation, 69120 Vaulx-en-Velin",
      price: "10",
      website: "https://www.planetariumvv.com/",
      description:
        "Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.",
      eventCover: "",
      users: {
        interUsers: ["001", "002"],
        partUsers: ["003", "004", "005", "006"],
      },
    },
    {
      creator: "tone",
      eventName: "La Pêche au Harpon",
      type: "nature",
      date: "2023-08-24",
      hourStart: "05:45",
      hourEnd: "00:45",
      address: "Rue de Créqui 69006 Lyon",
      price: "55",
      website:
        "https://www.snsm.org/conseils/conseils-loisirs-nautiques/peche-sous-marine-pratique-et-reglementation",
      description:
        "Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.",
      eventCover: "",
      users: {
        interUsers: ["001", "002"],
        partUsers: ["003", "004", "005", "006"],
      },
    },
    {
      creator: "max",
      eventName: "DemodayBatch89-LaCapsuleGrooveCamp",
      type: "science",
      date: "2033-01-11",
      hourStart: "14:45",
      hourEnd: "16:45",
      address: "35 rue de Marseille 69007 Lyon",
      price: "10",
      website: "https://now-coworking.com/",
      description:
        "Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.",
      eventCover: "",
      users: {
        interUsers: ["001", "002", "009", "010"],
        partUsers: ["003", "004", "005", "006", "007", "008"],
      },
    },
    {
      creator: "user",
      eventName: "???",
      type: "science",
      date: "2024-01-11",
      hourStart: "00:45",
      hourEnd: "03:45",
      address: "35 rue de Marseille 69007 Lyon",
      price: "Gratuit",
      website: "",
      description:
        "Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.",
      eventCover: "",
      users: {
        interUsers: [
          "003",
          "004",
          "005",
          "006",
          "007",
          "008",
          "001",
          "002",
          "009",
          "010",
        ],
        partUsers: [],
      },
    },
    {
      creator: "user",
      eventName: "TekTek69event",
      type: "music",
      date: "2023-12-11",
      hourStart: "21:45",
      hourEnd: "03:45",
      address: "rue de Sèze 69006 Lyon",
      price: "3",
      website: "",
      description:
        "Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.",
      eventCover: "",
      users: {
        interUsers: [
          "003",
          "004",
          "005",
          "006",
          "007",
          "008",
          "001",
          "002",
          "009",
          "010",
        ],
        partUsers: [],
      },
    },
    {
      creator: "user",
      eventName: "GymTonic2000",
      type: "sport",
      date: "2023-11-11",
      hourStart: "07:45",
      hourEnd: "08:45",
      address: "rue de Sèze 69006 Lyon",
      price: "3",
      website: "",
      description:
        "Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.",
      eventCover: "",
      users: {
        interUsers: ["003", "004", "005", "006", "002", "009", "010"],
        partUsers: ["007", "008", "001"],
      },
    },
  ];

  let now = new Date();
  //console.log(now);

  const dates = [formatDate(now)];

  for (let i = 1; i <= 100; i++) {
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + i);
    dates.push(formatDate(nextDay));
  }

  //console.log(dates);
  


  const sortedEvents = eventData.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  //console.log(sortedEvents.length)
  //console.log(dates.includes(sortedEvents[0].date));
  //console.log(dates[0]);
  //console.log((sortedEvents[0].date));
  
  let dateAllEvent = [];

  for (let i= 0; i < sortedEvents.length; i++) {
    dateAllEvent.push(sortedEvents[i].date)
  }
  
  const today = new Date();
  console.log(today);
  const dateEvents = [...new Set(dateAllEvent)].filter(date => date >= formatDate(today));

  console.log(dateEvents);

  const dayList = dateEvents.map((data, i) => {
    
     

    
    return (
      <View style={styles.scrollContainer} key={i}>
        <Text style={styles.textStyle}>{formatDateToFrenchLocale(data)}</Text>
        <View>
          {dateList(sortedEvents, data).map((data, i) => {

            if(data.type === "music") {
              stringStyle = "rgba(89, 215, 207, 1)";
              colorFont = "white";
            } if (data.type === "art") {
              stringStyle = "rgba(255, 141, 141, 1)";
              colorFont = "white";
            } if (data.type === "food") {
              stringStyle = "rgba(243, 243, 243, 1)"
              colorFont = "black";
            } if (data.type === "nature") {
              stringStyle = "rgba(133, 244, 150, 1)"
              colorFont = "black";
            } if (data.type === "science") {
              stringStyle = "rgba(140, 178, 255, 1)"
              colorFont = "black";
            } if (data.type === "sport") {
              stringStyle = "rgba(250, 189, 132, 1)"
              colorFont = "black";
            }
            return (
              <TouchableOpacity key={i} onPress={() => handlePress(data)}>
                <View
                  
                  style={{
                    backgroundColor: stringStyle,
                    width: 350,
                    height: 80,
                    borderRadius: 100,
                    paddingLeft: 30,
                    paddingTop: 12,
                    margin: 20,
                  }}
                >
                  <View>
                    <Text style={{color: colorFont}}>
                      {data.eventName} {data.hourStart}-{data.hourEnd}
                    </Text>
                    <Text style={{color: colorFont}}>{data.address} </Text>
                    <Text style={{color: colorFont}}>
                      Partcipants: {data.users.partUsers.length} Intéressés:{" "}
                      {data.users.interUsers.length}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
      <View>
        <TextInput
          placeholder="Recherche"
          onChangeText={(value) => setResearch(value)}
          value={research}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => handleSearch()}
          style={styles.searchButton}
        >
          <FontAwesome name={"search"} size={30} color={"black"} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.scrollContainer}>{dayList}</View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => handleSubmit()}
        style={styles.pressableButton}
      >
        <FontAwesome name={"map"} size={40} color={"#b2b2b2"} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
// style -------------------------------------------------------------------
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#1E064E",
  },

  input: {
    height: 50,
    padding: 12,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: "white",
  },

  searchButton: {
    position: "absolute",
    top: 38,
    right: 30,
    padding: 10,
  },

  scrollContainer: {
    backgroundColor: "#1E064E",
    alignItems: "center",
  },

  textStyle: {
    color: "white",
  },

  pressableButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 30,
  },
});
