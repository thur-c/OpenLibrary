import { Text } from 'react-native';
import { MainContainer,  InputContainer, TextError } from './styles';

interface InputTypes {
  label: string;
  title: string;
  isSecure?: boolean;
  autoComplete?: string;
  keyboardType?: string;
  color?: string;
  onChangeText?: (data: string) => void;
  value?: string;
  error?: boolean;
  errorMessage?: string;
}
export default function Input({
	label,
	title,
	isSecure,
	autoComplete,
	keyboardType,
	color,
	onChangeText,
	value,
	error,
	errorMessage
}: InputTypes){
	return(
		<MainContainer>
			{title.length > 0 &&
        <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>{title}</Text>
			}

			<InputContainer

				showSoftInputOnFocus
				autoComplete={autoComplete}
				secureTextEntry={isSecure}
				placeholderTextColor='#fff5'
				placeholder={label}
				keyboardType={keyboardType}
				enterKeyHint='send'
				color={error === true ? '#f00' :  color}
				onChangeText={onChangeText}
				value={value}
			/>
			{error &&

        <TextError>{errorMessage}</TextError>
			}


		</MainContainer>
	);
}
