import React from 'react';
import {Image, StyleSheet} from 'react-native'
import AppButton from '../components/AppButton';
import ApptextInput from '../components/ApptextInput';
import {Formik} from 'formik'
import * as Yup from 'yup'      //validation schema
import AppText from '../components/AppText'
import Screen from '../components/Screen'
import ErrorMessage from '../components/ErrorMessage'

const validationSchema= Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})


function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>

            <Formik 
                initialValues={{email: '', password: ''}}
                onSubmit={value=> console.log(value)}
                validationSchema = {validationSchema}
                >
                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                         <ApptextInput 
                            placeholder= "Email" 
                            icon= "email"
                            autoCorrect={false} 
                            onBlur={()=>setFieldTouched("email")}
                            autoCapitalize="none"
                            keyboardType = "email-address"
                            onChangeText={handleChange("email")}
                            textContentType= "emailAddress"
                        />

                        {touched.email && <ErrorMessage errors={errors.email}/>}
                        
                        <ApptextInput 
                            placeholder= "Password" 
                            icon= "lock"
                            autoCorrect={false} 
                            onBlur={()=>setFieldTouched("password")}
                            autoCapitalize="none"
                            keyboardType = "email-address"
                            textContentType= "password"
                            secureTextEntry
                            onChangeText={handleChange("password")}

                    />

                    {touched.password && <ErrorMessage errors={errors.password}/>}


                    <AppButton title="Login"
                        onPress={handleSubmit}
                    />
                    </>
                )}
            </Formik>

           
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    logo:{
        width:80,
        height:80,
        alignSelf: 'center', 
        marginTop: 50,
        marginBottom:20
    }
    
    
})
export default LoginScreen;