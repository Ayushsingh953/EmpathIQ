import Toast from "react-native-toast-message";

export default function showToast(txt1,txt2,type,color){
    return Toast.show({
          type:type ,
          text1: txt1,
          text2:txt2,
          text1Style:{fontSize:20,color:color},
          text2Style:{fontSize:16}
    })
}