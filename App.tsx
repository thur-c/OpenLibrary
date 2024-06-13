import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './src/@types/RootStackParamList';


export default function App() {
	const Stack = createNativeStackNavigator<RootStackParamList>();

	function MyStack(){
		return(
			<Stack.Navigator screenOptions={{headerShown: false, animation: 'ios'}} >
				<Stack.Screen  name='Login' component={Login}/>
				<Stack.Screen  name='Home' component={Home}/>
			</Stack.Navigator>
		);
	}
	return (
		<NavigationContainer>
			<MyStack/>
		</NavigationContainer>
	);
}
