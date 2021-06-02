import React from 'react';
import AppText from '../components/AppText'
import {StyleSheet} from 'react-native'

function ErrorMessage({errors}) {

    if(!errors) return null

    return (
       <AppText style={styles.error}>
        {errors}
       </AppText>
    );
}


const styles= StyleSheet.create({
    error: {
        color:'red'
    }
})


export default ErrorMessage;
