import { Text } from 'react-native';
import Input from '../../components/Input';
import { InputView, MainContainer, SubmitButton } from './styles';

export default function Login({navigation}){

	function handlePressSubmitButton(){
		navigation.navigate('Home');
	}
	return(
		<MainContainer>
			<Text style={{color: '#fff', fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>LOGIN</Text>
			<InputView>

				<Input keyboardType='name' autoComplete='email' title='Email:' label='user_name'/>
				<Input autoComplete='new-password' isSecure title='Senha:' label='your_pwd'/>

				<SubmitButton onPress={() => handlePressSubmitButton()}>
					<Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Enviar</Text>
				</SubmitButton>

			</InputView>
		</MainContainer>
	);
}
