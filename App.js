import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, Vibration, Platform } from 'react-native';
import { Focus } from './src/features/Focus.js';
import { Timer } from './src/features/Timer.js';
import { TextInput } from 'react-native-paper';
import { PastTasks } from './src/components/PastTasks';
import * as Animatable from "react-native-animatable";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [focusSubject, setFocusSubject] = useState('')
  const [pastTasks, setPastTasks] = useState([])
  const newSubject = async (subject) => {
    let ptasks = pastTasks
    setFocusSubject(subject)
    if (subject) {
      ptasks.push(subject)
      await AsyncStorage.setItem('History', JSON.stringify(ptasks));
      //const hist = await AsyncStorage.getItem('History')
      
    }
    setPastTasks(ptasks)
    //console.log(ptasks)
  }
  const saveFocusHistory = async () => {
    try { 
      await AsyncStorage.setItem('History', JSON.stringify(pastTasks));
      const hist = await AsyncStorage.getItem('History')
      console.log('async', hist, pastTasks)
    } catch (error) {
      console.log(error)
    }
  }
  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('History')
      console.log(history, 'load')
      if (history  && JSON.parse(history).length){
        setPastTasks(JSON.parse(history))
        console.log('loaded', history)
      }
    } catch(err){
      console.log(error)
    }
  }
    useEffect(() => {
      loadFocusHistory()
    },[])

    useLayoutEffect(()=>{
      saveFocusHistory();

    })

    return (
      !focusSubject ? (
        <Animatable.View style={styles.container} animation = 'slideInUp'>
          <Focus addSubject={newSubject} />
          <View style={styles.containerPast}>
            <View style={styles.pastTitle}>
              <Text style={styles.title}>Past Tasks:</Text>
              <TouchableOpacity style={styles.button} onPress={()=>setPastTasks([])}><Text>Clear</Text></TouchableOpacity>
            </View>
            <PastTasks past={pastTasks} />
        </View>
      </Animatable.View>)
      :
      (
        <Animatable.View animation = 'slideInRight' style={styles.container}>
          <Timer press={newSubject} focusSubject={focusSubject} />
        </Animatable.View>
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  pastTitle : {
    backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    alignSelf:'flex-end',
    margin: 20,
    textAlignVertical:'center',
    color: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
},
  containerPast: {
    flex: 0.5,
    padding: 50
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontWeight: 'bold', 
    fontSize : 24,
  },

});
