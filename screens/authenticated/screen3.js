import { Button, Text, View } from "react-native";
import { FIREBASE_AUTH } from "../../firebaseConfig";

export default function Screen3(){
    return (
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Profile Screen</Text>
            <Button title="logout" onPress={()=>{
                FIREBASE_AUTH.signOut();
            }}/>
        </View>
    )
}