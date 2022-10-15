import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors';


const styles = StyleSheet.create({

    container:{
        marginBottom: 10,


    },

    label:{
        marginBottom:8,
        color: colors.blue,
        fontSize:14,
        fontWeight:'500'

    },


    inputContainer:{
        borderWidth:1,
        borderColor: colors.grey,
        borderRadius: 15,
        flexDirection:'row',
        alignItems:'center',




    },


    input:{
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex:1,

    },
    eye:{
        width:24,
        height:24,
        marginHorizontal:16,
    }



});

export default styles;