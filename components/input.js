import { StyleSheet, Text, TextInput } from "react-native";

export default function Input({type,placeholder,label,secure,height,multiline,value,onChangeText}){
    return(
        <>
        <Text style={{fontSize:18,color:"white",marginLeft:10,marginVertical:8}}>{label}</Text>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor="grey"
              keyboardType={type}
              style={styles.inputField}
              secureTextEntry={secure}
              height={height}
              multiline={multiline}
              value={value}
              onChangeText={txt=>onChangeText(txt)}
            />
            </>
    )
}

const styles = StyleSheet.create({
    inputField:{
        padding:12,
        backgroundColor:"#d4d4d4",
        width:"100%",
        borderRadius:15,
        fontSize:16,
      }
})