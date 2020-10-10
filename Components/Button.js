import React from "react"
import {StyleSheet, TouchableOpacity, Text, View} from "react-native"

export default function SaveButton(props){
    return(
        <TouchableOpacity>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button : {
        borderRadius : 10,
        paddingVertical : 14,
        paddingHorizontal : 10,
        backgroundColor : "#6488E4"
    },
    buttonText : {
        color : "white",
        fontWeight : "bold",
        fontSize : 16,
        textAlign : "center"
    }
});