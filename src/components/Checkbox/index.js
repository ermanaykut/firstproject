import { TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { styles } from './style';

const Checkbox =({checked, onCheck})=>{
  
    
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={()=> onCheck(!checked)} style={styles.container}>

            {checked? (
                <View style={styles.innercontainer}>
                    <Image style={styles.checkicon} source={require('../../assets/checked.png')}/>
                </View>
            ) : null}


        </TouchableOpacity>
      )
}

export default React.memo(Checkbox);
