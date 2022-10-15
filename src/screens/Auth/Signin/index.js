import React, { useState } from 'react';
import {View, Text, ScrollView} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {styles} from './style';

const Signin = () => {
    const[checked, SetChecked] = useState(false);
    const onSignUp = () => {

    }
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title={'Sign In'} />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="********" />
      <Button style={styles.button} title='Sign In'/>
      <Seperator text='Or Sign In with'/>
      <GoogleLogin/>
      <Text style={styles.footerText}>
        Don't you have an account? 
        <Text onPress={onSignUp} style={styles.footerLink}> Sign Up </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(Signin);
