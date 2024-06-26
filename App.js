import { StyleSheet, TouchableOpacity } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useContext, useEffect, useRef } from "react";
import {Ionicons, AntDesign, Feather} from '@expo/vector-icons';
import * as Animatable from "react-native-animatable";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthContextProvider, { AuthContext } from "./store/auth-context";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";
import GetStarted from "./screens/auth/getStarted";
import Screen1 from "./screens/authenticated/screen1";
import Screen2 from "./screens/authenticated/screen2";
import Screen3 from "./screens/authenticated/screen3";

const Tab=createBottomTabNavigator();
const Stack=createNativeStackNavigator();

const TabButton = props => {
    const {name, onPress, size, accessibilityState, tag} = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {
      if (focused) {
        viewRef.current.animate({
          0: {scale: 0.5},
          1: {scale: 1.2},
        });
      } else {
        viewRef.current.animate({
          0: {scale: 1.2},
          1: {scale: 1},
        });
      }
    }, [focused]);
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={styles.buttonContainer}>
        <Animatable.View
          ref={viewRef}
          duration={500}
          style={styles.buttonContainer}>
          <Ionicons
            name={focused ? name.active : name.inactive}
            size={size}
            color={focused ? '#5c66be' : '#595e87'}
          />
          {/* <Text style={{ fontSize: 10, fontFamily: 'cursive' }}>{tag}</Text> */}
        </Animatable.View>
      </TouchableOpacity>
    );
  };

  function AuthenticatedScreens() {
    return (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: 60,
            },
            tabBarShowLabel: false,
            headerShown: false,
          }}>
          <Tab.Screen
            name="Screen1"
            component={Screen1}
            options={{
              tabBarIcon: ({focused, color}) => (
                <AntDesign
                  name={focused ? 'home' : 'home'}
                  size={26}
                  color={color}
                />
              ),
              tabBarButton: props => (
                <TabButton
                  {...props}
                  name={{active: 'home', inactive: 'home'}}
                  tag={'Screen1'}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Screen2"
            component={Screen2}
            options={{
              tabBarIcon: ({focused, color}) => (
                <Ionicons
                  name={focused ? 'compass' : 'compass-outline'}
                  size={26}
                  color={color}
                />
              ),
              tabBarButton: props => (
                <TabButton
                  {...props}
                  name={{active: 'compass', inactive: 'compass-outline'}}
                  tag={'Screen2'}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Screen3"
            component={Screen3}
            options={{
              tabBarIcon: ({focused, color}) => (
                <Feather
                  name={focused ? 'search' : 'search'}
                  size={26}
                  color={color}
                />
              ),
              tabBarButton: props => (
                <TabButton
                  {...props}
                  name={{
                    active: 'search',
                    inactive: 'search',
                  }}
                  tag={'Screen3'}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
    );
  }

function AuthScreens() {
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="getStarted" component={GetStarted}/>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={Signup} />
    </Stack.Navigator>
    );
  }

  function Navigation() {

    const authCtx=useContext(AuthContext);

    return (
      <NavigationContainer>
        {!authCtx.isAuthenticated && <AuthScreens />}
        {authCtx.isAuthenticated && <AuthenticatedScreens />}
      </NavigationContainer>
    );
  }
export default function App(){
    return (
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });