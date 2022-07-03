import WelcomeScreen from './app/screens/WelcomeScreen';
import Play from './app/screens/Play';
import Edit from './app/screens/Edit';
import 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{headerShown: false}}
        > 
            <Stack.Screen name = "Home" component = {WelcomeScreen}/>
            <Stack.Screen name = "Play" component = {Play}  />
            <Stack.Screen name = "Edit" component = {Edit}  />
        </Stack.Navigator>
      </NavigationContainer>
      
  );
};
