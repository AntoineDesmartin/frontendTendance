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

import FontAwesome from "react-native-vector-icons/FontAwesome";

//data ------------------------

const eventData = [
  {
    creator: "joan",
    eventName: "SJparty",
    type: "music",
    date: "2023-08-10",
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
    date: "2023-10-22",
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

  const handleSubmit = () => {
    navigation.navigate("TabNavigator", { screen: "TabNavigator" });
    // constante pour rejoindre la map au onPress
  };

  const handleSearch = () => {
    setResearch('');
  };

  const events = eventData.map((data, i) => {
    //mapping des events
    return (
      <View key={i} style={styles.eventStyle}>
        <View>
          <Text style={styles.textStyle}>
            {data.eventName} {data.hourStart}-{data.hourEnd}
          </Text>
        </View>
        <View>
          <Text style={styles.textStyle}>
            {data.address} Partcipants: {data.users.partUsers.length}{" "}
            Intérèssé(e)s: {data.users.interUsers.length}
          </Text>
        </View>
      </View>
    );
  });

  //return du composant principal----------------------------------------

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
      <TextInput
        placeholder="Recherche"
        onChangeText={(value) => setResearch(value)}
        value={research}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => handleSearch()} style={styles.searchButton}>
        <FontAwesome name={"search"} size={30} color={"black"} />
      </TouchableOpacity>

      <ScrollView>
        <View style={styles.scrollContainer}>
          <View>
            <Text style={styles.textStyle}>Lundi 31 Juillet 2023</Text>
          </View>

          <View>{events}</View>
        </View>
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
    
    margin: 40,
    borderRadius: 20,
    backgroundColor: "white",
  },

  searchButton: {
    position: "absolute",
    top: 38,
    right: 45,
    padding: 10,
  },

  scrollContainer: {
    backgroundColor: "#1E064E",
    alignItems: "center",
  },

  textStyle: {
    color: "white",
  },

  eventStyle: {
    backgroundColor: "rgba(255, 141, 141, 1)",
    width: 350,
    height: 80,
    borderRadius: 100,
    paddingLeft: 30,
    paddingTop: 10,
    margin: 20,
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
