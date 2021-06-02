import {} from 'react-native'
import Colors from './color'

export default {
    text: 
    {
        color: Colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
}