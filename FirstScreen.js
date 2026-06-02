import React from "react";
import { View, Text, Button , StyleSheet} from "react-native";

const FirstScreen = (props) => {
    console.log(props);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>First Screen</Text>
            <Button title="Go to the 2 Screen"  onPress={() => props.navigation.navigate('Secound')} />
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333",
        padding: 10,
        textAlign: "center",
    }
});

export default FirstScreen;
