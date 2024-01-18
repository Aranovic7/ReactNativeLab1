import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { Image } from "react-native"

export default function App() {
  const [handleChange, setHandleChange] = useState("")
  return (
    <View style={styles.container}>
      <View style={styles.darkBlueView} />
      <View style={styles.lightBlueView}>
        <Text style={styles.myHeader}>Hello World!</Text>
        <Text style={styles.secondHeader}>First React Native App</Text>
        <Text>
          This is a paragraph explaining what this app is about. As you can see
          there are already many components including text, images and buttons
        </Text>
      </View>

      <Text style={styles.textQuestion}>
        What would you like to get out of this course?
      </Text>
      <TextInput
        placeholder="Enter text"
        onChangeText={setHandleChange}
        style={styles.placeholder}
      />
      <Text style={styles.textEmoji}>
        An emoji describing how you are feeling about the course:
      </Text>
      <Image source={require("./assets/emoji.png")} style={styles.img} />
      <Button title="Submit" onPress={() => console.log(handleChange)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  darkBlueView: {
    backgroundColor: "#24305E",
    width: "100%",
    height: "6%",
  },
  lightBlueView: {
    backgroundColor: "#A8D1E7",
    width: "100%",
    height: "17%",
  },
  myHeader: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  secondHeader: {
    fontSize: 20,
    fontWeight: "500",
  },
  textQuestion: {
    fontWeight: "800",
    fontSize: 17,
    marginTop: 50,
    alignSelf: "flex-start",
  },
  placeholder: {
    backgroundColor: "#F2F2F2",
    width: "80%",
    height: "15%",
    alignSelf: "flex-start",
    paddingBottom: 100,
  },
  textEmoji: {
    fontWeight: "800",
    fontSize: 17,
    marginTop: 50,
  },
  img: {
    width: "35%",
    alignSelf: "flex-start",
    height: "16%",
    marginTop: 10,
  },
})
