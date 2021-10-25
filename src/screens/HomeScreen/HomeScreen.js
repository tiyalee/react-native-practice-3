import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { firebase } from "../../firebase/config";

export default function HomeScreen(props) {
  
  const userName = props.extraData.fullName;



  return (
    <View style={styles.container}>
      <Text>This is the home page! welcome {userName}</Text>
    </View>
  );
}
