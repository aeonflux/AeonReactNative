//Import  a library to help create a component
import React from "react";
import { View, AppRegistry } from "react-native";

// Import components
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

//Create a component
const App = () => {
  // Renders content on mobile device
  // {{ flex: 1 }} expands component
  <View style={{ flex: 1 }}>
    <Header headerText={"Albums"} />
    <AlbumList />
  </View>;
};

//Render it to device
AppRegistry.registerComponent("aeon", () => App);
