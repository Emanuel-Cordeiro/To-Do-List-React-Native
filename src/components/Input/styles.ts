import styled from 'styled-components/native';

export const ContainerInput = styled.View`
  flex: 1;
`;

export const BackgroundInput = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;
  border: 1px solid;
  flex: 1;
`;

export const TextInputComponent = styled.TextInput.attrs({
  placeholderTextColor: '#808080',
})`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.sizes.lg}px;
  color: ${({ theme }) => theme.colors.gray_100};
  padding: 16px;
`;
