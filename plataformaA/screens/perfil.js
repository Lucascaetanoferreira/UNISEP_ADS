import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import perfil from "./screens/login";
import { View } from "react-native";


const Stack = createNativeStackNavigator();

export default function perfil(){
  return(
     <View>
        <text>ola perfil</text>
    <NavigationContainer>

      <Stack.Navigator initialRouteName="perfil">

        <Stack.Screen
          name="perfil" 
          component={perfil}
          options={{headerShown:false}}       
        />

      </Stack.Navigator>

    </NavigationContainer>
    </View>
  )
}