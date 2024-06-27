import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "../../components/input";
import CustomButton from "../../components/customButton";
import { useState } from "react";

const {width,height} = Dimensions.get("screen");

export default function Login({navigation}){

    const[email,setEmail] = useState();
    const[password,setPassword] = useState();

    return (
        <ScrollView contentContainerStyle={{width:width,height:height,alignItems:"center"}}>
        <StatusBar style="dark" />
         <LinearGradient colors={["#e2d5c6","#b4bdd9","#8a9ec4"]} style={StyleSheet.absoluteFillObject}/>
         <Image source={require("../../assets/login.png")} style={{width:width*0.9,height:height*0.4,marginTop:30}}/>
         <Text style={{fontSize:40,color:"white",fontWeight:900}}>Login</Text>
         <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",marginVertical:10}}>
          <Text style={{color:"white"}}>Don't have an account? </Text>
          <Pressable style={({pressed})=>pressed && {opacity:0.5}} onPress={()=>{
            navigation.navigate("signUp")
          }}>
            <Text style={{color:"#574bf3",textDecorationLine:"underline",fontWeight:"700"}}>Sign up</Text>
          </Pressable>
          </View>
         <View style={{width:width*0.8}}>
            <Input label="EMAIL :" type="email" placeholder="Enter email" value={email} onChangeText={setEmail}/>
            <Input label="PASSWORD :" type="default" secure={true} placeholder="Enter password" value={password} onChangeText={setPassword} />
         </View>
         <CustomButton label="LOGIN" styles={{button:styles.button,text:styles.text}} />
         </ScrollView>
    )
}

const styles = StyleSheet.create({
    button:{
        width:width*0.8,
        paddingVertical:20,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(255,255,255,0.9)",
        marginTop:25
    },
    text:{
        fontSize:16,
        fontWeight:"900",
        color:"rgba(0,0,0,0.8)"
    }
})