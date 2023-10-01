import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

const Alert = () => {
  return <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.iconContainer}>
          <Image source={{
          uri: "https://th.bing.com/th/id/R.4741be370843fc34c653193656d7e8ad?rik=nphUyjQBxr6Qvw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2017%2f05%2fAlert-PNG.png&ehk=GavtnJIFLYbXrrdxZyOncXQKxaJeWUB3SUwdWnsO5Ag%3d&risl=&pid=ImgRaw&r=0"
        }} style={styles.icon} />
        </View>
      </View>
      <View style={styles.lower}>
        <Text style={styles.heading}>{"Impact Detected, Drone has been DEPLOYED. VIDEO STREAMING TO EMS AND HOSPITALS NEARBY"}</Text>
        <Button buttonText="Close" style={styles.button} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  upper: {
    flex: 3,
    backgroundColor: "#F5A19A",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  lower: {
    flex: 4
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -50,
    left: 150
  },
  icon: {
    width: 113,
    height: 130
  },
  heading: {
    fontSize: 24,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 60
  },
  button: {
    marginTop: 20,
    marginHorizontal: 40
  }
});
export default Alert;

const Button = params => {
  const backgroundColor = params.backgroundColor || "#000";
  const textColor = params.textColor || "#fff";
  const btnStyle = {
    backgroundColor: backgroundColor,
    borderColor: params.borderColor || backgroundColor,
    borderWidth: 1
  };
  const btnText = {
    color: textColor
  };
  return <View style={[buttonStyles.btnContainer, params.style]}>
      <View style={!params.hideShadow ? buttonStyles.shadowContainer : null}>
        <Pressable style={[buttonStyles.btn, btnStyle]} onPress={params.onPress}>
          <Text style={[buttonStyles.btnText, btnText]}>{"Help is on the way, and they are ready\n          "}</Text>
          <View style={styles.childrenContainer}>{params.children}</View>
        </Pressable>
      </View>
    </View>;
};

const buttonStyles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center"
  },
  shadowContainer: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  btn: {
    height: 50,
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center"
  }
});