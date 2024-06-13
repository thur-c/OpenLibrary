import styled from 'styled-components/native';

export const MainContainer = styled.View`
  padding: 10px 0;
  flex: 1;
`;

interface InputContainerProps{
  color: string;

}

export const InputContainer = styled.TextInput<InputContainerProps>`
  width: 100%;
  min-width: 200px;
  min-height: 40px;
  border-radius: 5px;
  padding: 5px 10px;
  border: ${({color}: InputContainerProps) => color === undefined ? '#fff' : color} 2px solid;
  color: #fff;
`;

export const TextError = styled.Text`
  color: red;
  font-size: 14px;
  font-weight: 500;

`;
