import React from 'react'; //rsf
import { Image , StyleSheet, View} from 'react-native';
import colors from '../config/color'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen';


function ViewImagescreen(props) {
    return (
        <View style= {styles.container}>

            <View style= {styles.closeIcon}>
                <MaterialCommunityIcons name='close' color= {Colors.white} size={35}/>
            </View>
            <View style= {styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color= {Colors.white} size={35}/>
            </View>

            <Image  resizeMode="contain" style={styles.image} source= {require("../assets/chair.jpg")}>

            </Image>

        </View>
    );
}
//rnss
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        
        position: "absolute" ,//relative with parents
        top: 40,
        left:30,
    },
    deleteIcon: {
       
        position: "absolute" ,//relative with parents
        top: 40,
        right:30,
    },

    image: {
        width: "100%",
        height: "100%",
    }
})

export default ViewImagescreen;