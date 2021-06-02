import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'


import Colors from '../config/color'
import defalultStyle from '../config/styles'

function ApptextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            { icon && <MaterialCommunityIcons name= {icon} size={20} color= {Colors.medium} style= {styles.icon}/>}
            <TextInput style= {defalultStyle.text} {...otherProps}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    textInput:{
        color: Colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    icon: {
        marginRight: 10,    
    }

})

export default ApptextInput;