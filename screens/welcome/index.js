import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={{
          uri: "https://th.bing.com/th/id/R.8ca146943c1fd446af8ea58a8e3685a3?rik=nAmFs30Gx7cnJw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fncE%2fRGp%2fncERGp67i.png&ehk=tvstdro5R5UZ1nKezna51UST44u95fzC07q89n9Hsxc%3d&risl=&pid=ImgRaw&r=0"
        }} />
          <Text style={styles.text}>{"When seconds matter, pictures speak faster than words"}</Text>
        </View>
        <Text style={styles.footer}>{"Safety for the 21st century"}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: "700"
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: "700",
    marginBottom: 20
  }
});
export default WelcomeScreen;