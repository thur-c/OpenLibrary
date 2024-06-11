import { Text } from 'react-native';
import Input from '../../components/Input';
import { InputView, MainContainer, SubmitButton } from './styles';

export default function Login(){
	return(
		<MainContainer>
			<Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>LOGIN</Text>
			<InputView>
				<Input keyboardType='email-address' autoComplete='email' title='Email:' label='user@user.com'/>
				<Input isSecure title='Senha:' label='user123321'/>
			</InputView>
			<SubmitButton>
				<Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>Enviar</Text>
			</SubmitButton>
		</MainContainer>
	);
}
