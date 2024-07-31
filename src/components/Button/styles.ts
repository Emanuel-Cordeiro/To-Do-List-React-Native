import styled from 'styled-components/native';

export const BackgroundButton = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_dark};
  height: 54px;
  width: 54px;
  margin-left: 4px;
  border-radius: 6px;
`;

export const ButtonComponent = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
