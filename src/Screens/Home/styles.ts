import styled from 'styled-components/native';

export const MainContainer = styled.View`
  background-color: #222;
  flex: 1;
  padding: 20px;
`;


export const ViewConsulta = styled.View`
  background-color: #444;
  flex: 1;
  width: 100%;
  border-radius: 16px;
  padding: 10px;
  margin-top: 10px;
`;

export const ViewTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  gap: 5px;
`;

interface ButtonProps {
  color: boolean;
}

export const ButtonChangeTypes = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  justify-content: center;
  border-bottom-width: ${({color}: ButtonProps) => color == false ? 0 : 2}px;
  border-bottom-color: ${({color}: ButtonProps) => color == false ? '' : '#60a5fa'};
  height: 40px;
  flex: 1;
  background-color: #333;
  border-radius: 4px;

`;

interface TextProps {
  color: boolean;
}

export const TextButton = styled.Text<TextProps>`
  color: ${({color}: TextProps) => color === false ? '#fff' : '#60a5fa'};
  font-size: 16px;
  font-weight: bold;
`;

export const SubmitButton = styled.TouchableOpacity`
  max-width: 60px;
  flex-grow: 1;
  height: 40px;
  background-color: #16a34a;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ViewInput = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const BookButton = styled.TouchableOpacity`
  background-color: #333;
  padding: 10px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  min-height: 100px;
`;

export const BookTextInfo = styled.Text`
  color: #ccc;
  font-size: 14px;

`;

export const CloseButton = styled.TouchableOpacity`
  background-color: #fff;
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 15px;
  z-index: 1;
`;
