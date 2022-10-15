import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {styles} from './style'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const GoogleLogin = () => {

    
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image style ={styles.image} source={require('../../assets/google.png')}/>
        </TouchableOpacity>
      )
}

export default React.memo(GoogleLogin);
