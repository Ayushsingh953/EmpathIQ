import { Pressable, Text } from "react-native";

export default function CustomButton({label,onPress,styles}){
    return (
        <Pressable onPress={onPress} style={({pressed})=>[styles.button,pressed && {opacity:0.7}]}>
          <Text style={styles.text}>{label}</Text>
          </Pressable> 
    )
}

