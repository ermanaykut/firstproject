import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 54,


        
    },

    image:{
        width:40,
        height: 40

    },

    title:{

        color: colors.blue,
        fontWeight: '400',
        fontSize: 25,
        paddingHorizontal: 16,
        

    }


});
