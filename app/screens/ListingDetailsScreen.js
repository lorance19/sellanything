import React from 'react';
import {View, Image, StyleSheet} from 'react-native'
import AppText from '../components/AppText';
import ListItem from '../components/ListItem'
import colors from '../config/color'
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image  style= {styles.image} source ={require("../assets/lvsp.png")}></Image>
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>Red Jacket for Sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <ListItem
                    image={require('../assets/cat.png')}
                    title= "Cat"
                    subTitle="5 Listings"
                />
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    image: {
        width: '100%',
        height:300
    },
    detailContainer: {
        padding: 20,

    },
    title: {
        fontSize:24,
        fontWeight:"500"
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})
export default ListingDetailsScreen;