import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Vibration } from 'react-native';
const toMs = (min) => {
    return (min * 60 * 1000)
}

export const Countdown = ({

    minutes=9,
    isPaused = false,
    reportTime,
    done,
}) => {
    const vibrate = () => {
        if( Platform.OS ==='ios'){
            const interval = setInterval(()=>Vibration.vibrate(), 1000);
            setTimeout(()=> clearInterval(interval), 1000)
        } else {
            Vibration.vibrate(5, 100)
        }
    }
    
    const interval = React.useRef(null);
    
    const countDown = () => {
        setMillis((time) => {
            if (time === 0) {
                vibrate()
                
                return time
            }
            const timeLeft = time - 1000;
            //reportTime(timeLeft)
            console.log(timeLeft, minutes, millis)
            return timeLeft;
        })
    }
    useEffect(()=>{
        console.log('running')
        setMillis(toMs(minutes))
    }, [minutes])
    useEffect(() => {
        if (isPaused) {
            if(interval.current) clearInterval(interval.current);
            return;            
        }
        interval.current = setInterval(countDown, 1000);


        return () => clearInterval(interval.current)
    }, [isPaused, minutes])
    useEffect(() => {if (millis===0){done('')}}, [millis])
    const [millis, setMillis] = useState(toMs(minutes))
    //setMillis(toMs(minutes))
    const minute = Math.floor(millis / 1000 / 60) % 60
    const seconds = Math.floor(millis / 1000) % 60
    //console.log(minute, seconds)
    return (
        <View style={{ flex: 1 }}>
            <View style={styles().container}>
                <Text style={styles().text}>{minute}:{(seconds < 10) ? '0' : ''}{seconds}</Text>
            </View>
            <View style={styles().progressWrapper}>
                <View style={styles(millis, minutes).progressBar}></View>
            </View>
        </View>
    )
}


const styles = (progress, minutes) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressWrapper : {
        height:20,
        borderColor : 'white',
        borderWidth : 3,
        backgroundColor : 'white',
        flexDirection:'row',
        alignItems:'center',
       
    },
    progressBar : {
        height:10,
        borderColor : 'white',
        borderWidth : 3,
        backgroundColor : 'red',
        flexDirection:'row',
        flex : progress/toMs(minutes),
    },

    text: {
        fontSize: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
})
