import { BackHandler, Text } from 'react-native';
import Input from '../../components/Input';
import { FormView, MainContainer, SubmitButton, ViewInputs } from './styles';
import { useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/RootStackParamList';

export default function Login(){
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', () => {
			BackHandler.exitApp();
			return true;
		});
	}, []);

	function handlePressSubmitButton(){
		if (!userName || userName === '' || userName != 'admin') {
			setError(true);
		}
		else if (!password || password === '' || password!= 'admin123') {
			setError(true);
		}
		else {
			setError(false);
			navigation.navigate('Home');
		}
	}
	return(
		<MainContainer>
			<Text style={{color: '#fff', fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>LOGIN</Text>
			<FormView>

				<ViewInputs>
					<Input error={error} errorMessage={'Usuário ou senha inválidos!'} onChangeText={(user) => setUserName(user.trim())} autoComplete='username' title='Nome de usuário:' label='username01'/>
					<Input showEye={true} error={error} errorMessage={'Usuário ou senha inválidos!'} onChangeText={(pass) => setPassword(pass)} autoComplete='new-password' isSecure title='Senha:' label='user123'/>

				</ViewInputs>


				<SubmitButton onPress={() => handlePressSubmitButton()}>
					<Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Enviar</Text>
				</SubmitButton>

			</FormView>
		</MainContainer>
	);
}
