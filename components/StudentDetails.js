import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const StudentDetails = (props) => {
    <View style={stytles.container}>
        <View style={stytles.cardwrapper}>
            <View style={stytles.imagewrapper}>
                <Image source={props.Image} style={StyleSheet.img}/>
                <View style={stytles.infowrapper}>
                    <Text style={StyleSheet.name}>{props.name}</Text>
                    <Text>{props.description}</Text>

                    
                </View>

            </View>

        </View>

    </View>
}

const styles = StyleSheet.create({
    cardwrapper:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 15,
    },
    img:{
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    infoWrapper: {
        marginLeft: 20,
        marginTop: 20
    },
    name: {
        fontWeight: 'bold'
    }

});
export default StudentDetails
