import styled from 'styled-components/native';

interface CounterProps {
  textColor: string;
}

export const ContainerCounter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CreatedText = styled.Text<CounterProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.sizes.md}px;
  color: ${props => props.textColor};
  margin-right: 8px;
`;

export const BackgroundCounter = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 15px;
  height: 19px;
  width: 25px;
`;

export const CounterComponent = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.sizes.sm}px;
  color: ${({ theme }) => theme.colors.gray_200};
  text-align: center;
`;
