import React, { useState } from 'react';
import {View, Text, ScrollView} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {styles} from './style';

const Signup = () => {
    const[checked, SetChecked] = useState(false);
    const onSignIn = () => {

    }
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title={'Sign Up'} />
      <Input label="Name" placeholder="Erman Aykut" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="********" />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={SetChecked}/>
        <Text style={styles.agreeText}> I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
      </View>
      <Button style={styles.button} title='Sign Up'/>
      <Seperator text='Or Sign Up with'/>
      <GoogleLogin/>
      <Text style={styles.footerText}>
        Already have an account? 
        <Text onPress={onSignIn} style={styles.footerLink}> Sign In </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(Signup);
