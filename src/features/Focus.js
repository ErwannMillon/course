import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton'

export const Focus = ({ addSubject }) => {
    const [tmpItem, setTmpItem] = useState(null)
    return (
        <View style={styles.container}>
            <Text style={styles.title}> What would you like to do? </Text>
            <View style={styles.inputRow}>
                <TextInput onChangeText={(textt) => {
                    setTmpItem(textt)
                }} 
                type='outline' style={styles.inputt} 
                />
                <RoundedButton funct = {[addSubject, tmpItem ]}  size={50} title='+' />
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        //flex: 0.5,
        padding: 50
    },
    inputt: {

        flex: 1,
        marginRight: 10
    },
    title: {
        fontSize: 20,
        paddingBottom: 20,
        color: 'white',
        fontWeight: "bold"
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',

    }
})