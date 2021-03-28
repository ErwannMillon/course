import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    funct=[],
    ...props
}) => {
    return (
        <TouchableOpacity onPress={()=> {
            funct[0](funct[1])
            //console.log(funct[1], 'd')
        }}  style={[styles(size).radius, style]}>
            <Text style={styles(size).text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = (size) => StyleSheet.create({
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent:'center',
        borderColor : '#fff',
        backgroundColor:'#fff',
        borderWidth: 2,
        
    },
    text : {color:'black', fontSize:size/2}
})