import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import SaveButton from "../Components/Button"
import Example from "../Components/Date"

const AddTask = () => {
  return (
    <View style={{ flex : 1, justifyContent : "space-between", paddingVertical : 30, paddingHorizontal : 20 }}>
      <Text style={{ fontSize: 32, fontWeight: "800" }}>Create New Task</Text>

      <View>
        <Text>Title</Text>
        <TextInput placeholder="enter your title" style={{ height: 40, borderBottomWidth: 2, borderBottomColor: "gray" }}></TextInput>
      </View>

      <View>
        <Text>Date</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 2 }}>
            <TextInput placeholder="enter your title" style={{ height: 40, borderBottomWidth: 2, borderBottomColor: "gray" }}></TextInput>
          </View>
          <View style={{ flex: 1 }}>
            <Icon name="calendar" size={30} color="#900" />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text>Start Time</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput placeholder="enter your title" style={{ height: 40, borderBottomWidth: 2, borderBottomColor: "gray" }}></TextInput>
            <Icon name="clock-o" size={30} color="#900" />
          </View>
        </View>

        <View style={{ flex: 1 }}></View>

        <View style={{ flex: 1 }}>
          <Text>End Time</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput placeholder="enter your title" style={{ height: 40, borderBottomWidth: 2, borderBottomColor: "gray" }}></TextInput>
            <Icon name="clock-o" size={30} color="#900" />
          </View>
        </View>
      </View>

      <View>
        <Text>Description</Text>
        <TextInput multiline={true} style={{ height: 70, borderBottomWidth: 2, borderBottomColor: "gray", fontSize: 18, fontWeight: "500" }}></TextInput>
      </View>

      <View>
        <Text>Color</Text>
        <View style={{ flexDirection: "row", paddingVertical : 10, justifyContent : "space-between" }}>
          <View style = {{width : 40, height : 40, borderRadius : "100%", backgroundColor : "red"}}></View>
          <View style = {{width : 40, height : 40, borderRadius : "100%", backgroundColor : "green"}}></View>
          <View style = {{width : 40, height : 40, borderRadius : "100%", backgroundColor : "blue"}}></View>
        </View>
      </View>

      <Example></Example>

      <SaveButton text="Create New Task" />

    </View>
  );
}

export default AddTask;