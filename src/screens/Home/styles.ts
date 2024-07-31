import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_700};
  justify-content: center;
  align-items: center;
  min-height: 189px;
`;

export const Body = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_600};
  height: 100%;
`;

export const ContainerHeaderList = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  margin: 50px 25px 0 25px;
`;

export const ContainerList = styled.View`
  border-top-color: ${({ theme }) => theme.colors.gray_300};
  border-top-width: 0.5px;
  align-items: center;
  margin: 0 20px;
  padding-top: 48px;
`;

export const TextEmpty = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.sizes.md}px;
  color: ${({ theme }) => theme.colors.gray_300};
  text-align: center;
  margin: 16px 20px;
`;

export const ContainerInputButton = styled.View`
  width: ${Dimensions.get('window').width}px;
  margin-top: 156px;
  height: 57px;
  z-index: 1;
  position: absolute;
  flex-direction: row;
  padding: 0 24px;
`;
