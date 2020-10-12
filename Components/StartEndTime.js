import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Time = () => {

    const [date, setDate] = useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if(minutes>=0 || minutes<=9){
            minutes = "0" + minutes;
        }
        let time = hours + ":" + minutes;
        setDate(time);
        hideDatePicker();
    };

    return (
        <View>

            <TouchableOpacity onPress={showDatePicker}>
                <View>
                    <TextInput pointerEvents="none" style={{borderBottomWidth: 2, borderBottomColor: "#D3D3D3", height: 30, fontSize : 16, fontWeight : "500"}}>{date}</TextInput>
                </View>
            </TouchableOpacity>


            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default Time;