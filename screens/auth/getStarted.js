import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Text, View ,StyleSheet, Image} from "react-native";
import CustomButton from "../../components/customButton";

const {width,height} = Dimensions.get("screen");

export default function GetStarted({navigation}){
    return (
        <View style={{width:width,height:height,alignItems:"center"}}>
           <StatusBar style="dark" />
            <LinearGradient colors={["#e2d5c6","#b4bdd9","#8a9ec4"]} style={StyleSheet.absoluteFillObject}/>
            <View style={styles.logo}>
                <Text style={styles.logoText}>EMPATHIQ</Text>
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={{color:"white",fontSize:28,fontWeight:"900"}}>Welcome to EmpathIQ</Text>
                <Text style={{color:"white",lineHeight:25,textAlign:"center",fontWeight:"800",fontSize:16,marginTop:15}}>Enhance your empathy skills with interactive, real-life scenarios designed to improve your emotional intelligence and deepen your connections. Start your journey to becoming more compassionate and understanding today!</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/mental-health.png")} style={{width:"100%",height:"100%"}} resizeMode="contain"/>
            </View>
            <CustomButton label="GET STARTED" styles={{button:styles.button,text:{fontSize:16,fontWeight:900,color:"rgba(0,0,0,0.8)"}}} onPress={()=>navigation.navigate("login")} />
        </View>
    )
}

const styles=StyleSheet.create({
    logo:{
        width:width*0.8,
        height:55,
        marginTop:55,
        alignItems:"center",
        justifyContent:"center"
    },
    welcomeContainer:{
        width:width*0.8,
        padding:20,
        marginTop:35,
        alignItems:"center",

    },
    imageContainer:{
        width:width,
        height:height*0.4,
        marginTop:-10
    },
    logoText:{
        fontSize:32,
        fontWeight:"bold"
    },
    button:{
        width:width*0.8,
        paddingVertical:20,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(255,255,255,0.9)"
    }
})