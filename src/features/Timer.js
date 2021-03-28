import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Countdown } from './Countdown';
import { ProgressBar } from 'react-native-paper';
import RoundedButton from '../components/RoundedButton';
export const Timer = ({ focusSubject, press }) => {
    const [isStarted, setIsStarted] = useState(false)
    const [minutes, setMinutes] = useState(0.1)
    /*const reportTime = (time) => {
        setMinutes(time)
    }*/

    return (

        <View style={styles.main}>
            <View style={[styles.countdown, styles.margins]}>
                <Countdown isPaused={!isStarted} done={press} minutes={minutes} style={styles.title} />

            </View>
            <View style={[styles.buttonRow, styles.margins, { marginTop: 0 }]}>
                <TouchableOpacity style={styles.button} onPress={() => setIsStarted(!isStarted)} title='clear'><Text style={{ alignSelf: 'center', justifyContent: 'center', }}>{!isStarted ? 'play' : 'pause'}</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => press('')} title='clear'><Text style={{ alignSelf: 'center', justifyContent: 'center', }}>x</Text></TouchableOpacity>
            </View>
            <View style={[styles.buttonRow, styles.margins, { marginTop: 0 }]}>
                <TouchableOpacity style={styles.button} onPress={() => setMinutes(0.5)} title='clear'><Text style={{ alignSelf: 'center', justifyContent: 'center', }}>+10</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setMinutes(5)} title='clear'><Text style={{ alignSelf: 'center', justifyContent: 'center', }}>+15</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setMinutes(minutes+20)} title='clear'><Text style={{ alignSelf: 'center', justifyContent: 'center', }}>+20</Text></TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Focusing on :</Text>
                <ProgressBar color='blue' progress={1} height={10} ></ProgressBar>
                <Text style={styles.title}>{focusSubject}</Text>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },


    container: {
        flex: 0.5,
        //alignItems: 'center',
        marginHorizontal: 40,
        marginVertical: 20,

    },
    margins: {
        flex: 0.2,

    },
    buttonRow: {
        flexDirection: 'row',
        flex: 0.5,
        //justifyContent: 'space-evenly',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    button: {
        backgroundColor: "white",
        borderRadius: 25,
        margin: 20,
        textAlignVertical: 'center',
        color: 'white',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    tasks: {
        color: '#fff'
    },
    countdown: {
        flex: 0.2,
        margin: 60,
        fontSize: 100,
        justifyContent: "center",
        backgroundColor: 'green'
    }

})