import React from 'react';
import { Text , Pressable, View} from 'react-native';
import { StyleSheet } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Button = ({label, theme,onPress}) => {
    if(theme==='primary'){
        return (
        <View style={[styles.buttonContainer, {borderWidth: 4, borderColor:"#ffd33d", borderRadius:18}]}>
        <Pressable onPress={onPress} style={styles.button}>
        <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
           <Text  style={styles.buttonLabel} >{label}</Text>
        </Pressable>
        </View>
    );
    }
    return (
    <View style={[styles.buttonContainer,{backgroundColor:"#000"}]}>
        <Pressable onPress={onPress} style={styles.button}>
   
           <Text  style={styles.buttonLabel} >{label}</Text>
        </Pressable>
     </View>
    );
    
}

export const styles = StyleSheet.create({
       
       buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: '#ccc',
      },button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      buttonLabel: {
        color: '#fff',
        fontSize: 16,
      },
});
export default Button