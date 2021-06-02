import React, { useState } from 'react';
import {TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, SafeAreaView, FlatList} from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'


import Colors from '../config/color'
import defalultStyle from '../config/styles'
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({icon, placeholder,items, onSelectItem ,selectedItem}) {

    const [modelVisible, setmodelVisible] = useState(true);


    return (
        <>
        <TouchableWithoutFeedback onPress= {()=> setmodelVisible(true)}>

        <View style={styles.container}>
            { icon && <MaterialCommunityIcons 
                name= {icon} 
                size={20} 
                color= {Colors.medium} 
                style= {styles.icon}/>}
            <AppText style={styles.text}>
                {selectedItem ? selectedItem.label : placeholder}
            </AppText>
            <MaterialCommunityIcons 
                name= 'chevron-down' 
                size={20} 
                color= {Colors.medium} 
                />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modelVisible} animationType='slide'>
            <SafeAreaView>

                <Button title= 'Close' onPress= {()=> setmodelVisible(false)}/>
                <FlatList
                    data= {items}
                    keyExtractor={item=> item.value.toString()}
                    renderItem ={({item})=> 
                    <PickerItem label={item.label}
                        onPress={()=>{
                            setmodelVisible(false);
                            onSelectItem(item)

                        }}
                    />
                
                }
                    />
            </SafeAreaView>
        </Modal>
        </>
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
    text:{
       flex:1

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

export default AppPicker;