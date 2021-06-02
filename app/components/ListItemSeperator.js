import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../config/color'

function ListItemSeperator() {
    return (
        <View style={styles.separator}/>

    );
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.light,
    
    }
})

export default ListItemSeperator;