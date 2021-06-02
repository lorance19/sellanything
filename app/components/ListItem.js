import React from 'react';
import { View , StyleSheet, Image, TouchableHighlight} from 'react-native';
import AppText from './AppText';

import Swipeable from 'react-native-gesture-handler/Swipeable'
import Colors from '../config/color'

function ListItem({title, subTitle, image , onPress, ImageComponent,renderRightActions}) {
    return (
        <Swipeable renderRightActions= {renderRightActions} >

        <TouchableHighlight 
            onPress={onPress}
            underlayColor={Colors.light}
            >

        <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image}></Image>}
            <View style={styles.container2}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>

        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            padding: 15,
            backgroundColor:Colors.white
        },
        container2 :{
            marginLeft: 10, 
            justifyContent: 'center',
            

        },
        image: {
            width: 70,
            height:70,
            borderRadius : 35,
        },
        title: {
            
            fontWeight: 'bold'
        },
        subTitle:
        {
            color: Colors.medium
        }
    }
)

export default ListItem;