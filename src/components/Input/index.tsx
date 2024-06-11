import { Text } from 'react-native';
import { MainContainer,  InputContainer } from './styles';

interface InputTypes {
  label: string;
  title: string;
  isSecure?: boolean;
  autoComplete?: string;
  keyboardType?: string;
}
export default function Input({label, title, isSecure, autoComplete, keyboardType}: InputTypes){
	return(
		<MainContainer>
			<Text style={{color: '#fff', fontSize: 18}}>{title}</Text>

			<InputContainer
				autoComplete={autoComplete}
				secureTextEntry={isSecure}
				placeholderTextColor='#fff5'
				placeholder={label}
				keyboardType={keyboardType}
				enterKeyHint='send'
			/>

		</MainContainer>
	);
}
