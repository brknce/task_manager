import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Text, View, TextInput, Keyboard } from 'react-native';
import SaveButton from "../Components/Button"
import Date from "../Components/EndDate"
import StartEndTime from "../Components/StartEndTime"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

const AddTask = () => {
  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor:"white", paddingVertical : 20 }}>

      
        {/* Create New Task Text */}
        <View style = {{margin : 20}}>
          <Text style={{ fontSize: 32, fontWeight: "600" }}>Create New Task</Text>
        </View>

        {/* Title block */} 
        <View style = {{margin : 20}}>
          <Text style={{ color: "gray" }}>Title</Text>
          <TextInput maxLength = {50} style={{backgroundColor : "white", height: 30, borderBottomWidth: 1, borderBottomColor: "gray", fontSize: 16, fontWeight : "500" }}></TextInput>
        </View>

        {/* EndDate Block */}
        <View style={{ flexDirection: "row", alignItems: "flex-end", margin : 20 }}>
          <View style={{ flex: 4 }}>
            <Text style={{ color: "gray" }}>Date</Text>
            <Date></Date>
          </View>
          <View style={{ flex: 0.4 }}></View>
          <View style={{ flex: 1, backgroundColor: "#FF356A", borderRadius: "100%", alignItems: "center", justifyContent: "center", height: 50 }}>
            <Icon name="calendar-o" size={22} color="white" />
          </View>
        </View>


        {/* StartTime- EndTime*/}
        <View style={{ flexDirection: "row", margin : 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "gray" }}>Start Time</Text>
            <StartEndTime></StartEndTime>
          </View>
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "gray" }}>End Time</Text>
            <StartEndTime></StartEndTime>
          </View>
        </View>

        {/* Description Are */}
        <View style = {{margin : 20}}>
          <Text style={{ color: "gray" }}>Description</Text>
          <TextInput onSubmitEditing = {Keyboard.dismiss} maxLength = {90} multiline={true} style={{ fontSize: 16, height: 70, borderBottomWidth: 2, borderBottomColor: "#D3D3D3", fontSize: 16, fontWeight : "500" }}></TextInput>
        </View>

        <SaveButton text="Create New Task" />
      
    </KeyboardAwareScrollView>
  );
}

export default AddTask;