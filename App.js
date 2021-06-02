import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Button} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/welcomescreen';
import ViewImagescreen from './app/screens/viewImagescreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItemDeleteAction from './app/components/ListItemDeleteAction';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import ApptextInput from './app/components/ApptextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';


const  Categories = [
  {label: "Funature", value:1},
  {label: "Books", value:2},
  {label: "Clothings", value:3},

]
export default function App() {
  return (
    <LoginScreen/>
    
  );
}

