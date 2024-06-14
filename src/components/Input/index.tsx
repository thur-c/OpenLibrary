import { Text, TouchableOpacity, View } from 'react-native';
import { MainContainer,  InputContainer, TextError } from './styles';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';

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
  showEye?: boolean;
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
	errorMessage,
	showEye
}: InputTypes){

	const [secureText, setSecureText] = useState(isSecure);

	function toggleSecureText() {
		setSecureText(!secureText);
	}

	return(
		<MainContainer>
			{title.length > 0 &&
        <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>{title}</Text>
			}
			<View style={{alignItems: 'center', justifyContent: 'center'}}>
				{showEye &&
					<TouchableOpacity onPress={() => toggleSecureText()} style={{position: 'absolute', right: 15, zIndex: 1}}>
						<Entypo name={secureText ? 'eye' : 'eye-with-line'} size={22} color="#fff" />
					</TouchableOpacity>
				}

				<InputContainer
					showSoftInputOnFocus
					autoComplete={autoComplete}
					secureTextEntry={secureText}
					placeholderTextColor='#fff5'
					placeholder={label}
					keyboardType={keyboardType}
					enterKeyHint='send'
					color={error === true ? '#f00' :  color}
					onChangeText={onChangeText}
					value={value}
				/>
			</View>

			{error &&
        <TextError>{errorMessage}</TextError>
			}


		</MainContainer>
	);
}
