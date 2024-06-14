import styled from 'styled-components/native';

export const MainContainer = styled.View`
  background-color: #333;
  margin-top: 5%;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 20px;
  flex: 1;

`;

export const TextInfo = styled.Text`
  color: #eee;
  font-size: 16px;
`;

export const ViewTextInfo = styled.View`
  flex: 1;
  gap: 8px;
`;


export const CloseButton = styled.TouchableOpacity`
  background-color: #fff;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 20px;
  z-index: 1;
`;
