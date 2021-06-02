import React from 'react';
import { FlatList, StyleSheet , View} from 'react-native';
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import Icon from "../components/Icon"

import  Colors  from '../config/color';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItem = [
    {
        title: "My Listing",
        icon:{
            name:"format-list-bulleted",
            backgroundColor: Colors.primary
        }
    },
    {
        title: "My Message",
        icon:{
            name:"email",
            backgroundColor: Colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style= {styles.screen}>
            <View style= {styles.container}>

            <ListItem
                title= "Lorance"
                subTitle = "Just give me interview"
                image = {require('../assets/cat.png')}
            />
            </View>


            <View style={styles.container}>
                <FlatList
                    data= {menuItem}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({item}) => 
                <ListItem 
                    title= {item.title}
                    ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
                    
                        /> }
                    ItemSeparatorComponent={ListItemSeperator}
                />

            </View>

            <ListItem title="Log Out" 
             ImageComponent = {
                 <Icon name= "logout" backgroundColor="#ffe66d"/>
             }
             />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container : {
        marginVertical: 20
    },
    screen: {
        backgroundColor: Colors.light
    }
})

export default AccountScreen;