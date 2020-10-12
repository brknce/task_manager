import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Date = () => {

    const [date, setDate] = useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let dateString = date.getDate() + " - " + (date.getMonth() + 1) + " - " + date.getFullYear();
        setDate(dateString);
        hideDatePicker();
    };

    return (
        <View>

            <TouchableOpacity onPress={showDatePicker}>
                <View>
                    <TextInput pointerEvents = "none" style={{ borderBottomWidth: 1, borderBottomColor: "gray", height: 30, fontSize : 16, fontWeight : "500" }}>{date}</TextInput>
                </View>
            </TouchableOpacity>


            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default Date;