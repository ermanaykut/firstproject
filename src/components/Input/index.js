import {Pressable, Text, TextInput, View, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

const Input = ({label, placeholder, isPassword}) => {
  const [isPasswordVisiable, setIsPasswordvisiable] = useState(false);
  const onEyePress = () => {
    setIsPasswordvisiable(!isPasswordVisiable);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisiable}
          placeholder={placeholder}
          style={styles.input}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image style={styles.eye} source={isPasswordVisiable ? require('../../assets/eye.png'):require('../../assets/closedeye.png')} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(Input);