import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Início",
          headerShown: false,
        }}
      />
      
       <Stack.Screen
        name="SobreScreen"
        component={SobreScreen}
        options={{
          title: "Sobre",
        }}
      />
      {/* <Stack.Screen name="BuscaCep" component={BuscaCep} /> */}
    </Stack.Navigator>
  );
}
