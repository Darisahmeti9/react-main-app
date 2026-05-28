import React from "react";
import {View, Text, StyleSheet , Button , TouchableOpacity} from 'react-native'

const ButtonScreen = () => {
    let counter , counterT = 0;
    return(
        <View>
            <Text style={styles.textStyle}>Button Screen</Text>
            <Button
            title="Click me"
            color="pruple"
            onPress={() => console.log('Button Clicked: ', counter++)}
            />
            <TouchableOpacity
            style={styles.touchablebtn}
            onPress={() => console.log(' TouchableOpacity Clicked: ', counterT++)}
            >
                <Text style={styles.btnText}>Click Touchable Element</Text>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    textStyle: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15 ,
        marginBottom: 10,
    },
    touchablebtn: {
        backgroundColor: 'purple',
        marginTop: 15,
        paddingVertical: 20,
        borderRadius: 6,
        marginHorizontal: 20,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25 ,
        fontWeight: 'bold',
    }

});

export default ButtonScreen;
