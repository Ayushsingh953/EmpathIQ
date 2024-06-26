import { createContext,useState } from "react";


export const AuthContext = createContext({
    token:"",
    isAuthenticated: false,
    user:{},
    setUser:(user)=>{},
    authenticate:(token) => {},
});

function AuthContextProvider({children}) {
    const [authToken,setAuthToken]=useState('');
    const[userData,setUserData]=useState({});

    function authenticate(token) {
        setAuthToken(token);
    }
    
    function setUser(user){
        setUserData(user);
    }



    const value={
        token:authToken,
        isAuthenticated:!!authToken,
        user:userData,
        setUser:setUser,
        authenticate:authenticate,
        
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;

