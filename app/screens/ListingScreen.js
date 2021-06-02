import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import Screen from '../components/Screen'
import Card from '../components/Card'
import Colors from '../config/color'

const listings = [
    {
        id: 1,
        title: "Red Jaccket For sale",
        price: 100,
        image: require('../assets/lvsp.png')
    },
    {
        id: 2,
        title: "Gucci Hat",
        price: 80,
        image: require('../assets/guccihat.jpg')
    },

]


function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
            data= {listings}
            keyExtractor= { listing=> listing.id.toString()}
            renderItem= {({item}) =>
            <Card
                title = {item.title}
                subtitle= { "$" + item.price}
                image = {item.image}
            
            />
        }
            />
        </Screen>
    );
}


const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.light,
        padding: 20,
        
    }
})

export default ListingScreen;