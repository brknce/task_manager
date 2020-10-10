import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Example = () => {

    const [date, setDate] = useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        setDate(dateString);
        hideDatePicker();
    };

    return (
        <View>

            <TouchableOpacity onPress={showDatePicker}>
                <View>
                    <Text style={{ color: "gray" }}>End Date</Text>
                    <TextInput pointerEvents = "none" style={{ borderBottomWidth: 2, borderBottomColor: "#D3D3D3", height: 30 }}>{date}</TextInput>
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

export default Example;