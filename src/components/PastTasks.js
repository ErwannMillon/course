import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const PastTasks = ({ past }) => {
    const TaskList = past.map((task, i) => {
        return <Text  style={styles.title} key={i}>{task}</Text>
    })
    console.log('past', past);
    if (TaskList.length > 0) {
        return TaskList
    }
    return (<Text style={styles.title}>No Items</Text>)

}
const styles = StyleSheet.create({
    title : {
        fontSize: 18,
        color: 'white',
        padding: 5,

    }
})

