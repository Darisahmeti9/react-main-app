import React from "react";
import { Text, View , StyleSheet } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentScreen = () => {
      <View>
          <Text>Student Screen</Text>
          <StudentDetails name="Ensar" image={require('../assets/shpati.png')} description="Student at Digital School"/>
          <StudentDetails name="Shpati" image={require('../assets/shpati.png')} description="Student at Digital School"/>
          <StudentDetails name="Daris" image={require('../assets/shpati.png')} description="Student at Digital School"/>

      </View>
}
const styles = StyleSheet.create({
 text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
    }

});

export default StudentScreen;