import React, { useState } from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';


const Initialmessages = [
    {
        id : 1,
        title: 't1',
        description: 'D1',
        image: require('../assets/cat.png')
    },
    {
        id : 2,
        title: 't2',
        description: 'D2',
        image: require('../assets/cat.png')
    }

]


function MessageScreen(props) {

    const [messages, setMessage]  = useState(Initialmessages)
    const [refreshing, setRefresing] = useState(false)
    const handleDelete = message => {
        const newMessages = messages.filter( m => m.id !== message.id)
        setMessage(newMessages)
    }

    return (
        <Screen >
            
        <FlatList
            data= {messages}
            keyExtractor = {messages => messages.id.toString()}
            renderItem= {({item})=> 
            <ListItem
                title= {item.title}
                subTitle= {item.description}
                image = {item.image}
                onPress= {()=>console.log('Message Selected', item)}
                renderRightActions= {()=> <ListItemDeleteAction 
                    onPress ={()=>handleDelete(item)}
                        />}
                
                
            />
        
        }
            ItemSeparatorComponent={()=><ListItemSeperator />}
            refreshing={refreshing}     //refreshing item
            onRefresh= {
                ()=>{
                    setMessage([
                        {
                            id : 2,
                            title: 't2',
                            description: 'D2',
                            image: require('../assets/cat.png')
                        }
                    ])
                }
            }               //
        >
            
        </FlatList>
        </Screen>
    );
}


const styles = StyleSheet.create({
    
})
export default MessageScreen;