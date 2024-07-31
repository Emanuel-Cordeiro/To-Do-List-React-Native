import styled, { css } from 'styled-components/native';

interface TaskItemProps {
  lineCross: boolean;
}

export const ContainerTask = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 8px;
  margin: 8px 24px;
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
`;

export const TextContent = styled.Text<TaskItemProps>`
  color: ${({ theme }) => theme.colors.gray_100};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.sizes.md}px;
  padding-left: 8px;
  width: 80%;

  ${props =>
    props.lineCross &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.gray_300};
    `}
`;

export const ContainerButtonIcon = styled.View`
  height: 25px;
  width: 25px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  flex: 1;
`;
