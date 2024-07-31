import React from 'react';
import { CheckCircle, Circle, Trash } from 'phosphor-react-native';

import theme from '../../theme/theme';

import {
  ButtonIcon,
  ContainerButtonIcon,
  ContainerTask,
  TextContent,
} from './styles';

type Props = {
  text: string;
  isChecked: boolean;
  onRemove: () => void;
  onConclude: () => void;
};

const TaskItem = ({ text, isChecked, onRemove, onConclude }: Props) => {
  const lineCross = isChecked;

  return (
    <ContainerTask>
      <ContainerButtonIcon>
        <ButtonIcon onPress={onConclude}>
          {isChecked ? (
            <CheckCircle
              size={25}
              weight="fill"
              color={theme.colors.purple_dark}
            />
          ) : (
            <Circle size={25} color={theme.colors.blue} />
          )}
        </ButtonIcon>
      </ContainerButtonIcon>

      <TextContent numberOfLines={2} lineCross={lineCross}>
        {text}
      </TextContent>

      <ContainerButtonIcon>
        <ButtonIcon onPress={onRemove}>
          <Trash size={25} color={theme.colors.gray_300} />
        </ButtonIcon>
      </ContainerButtonIcon>
    </ContainerTask>
  );
};

export default TaskItem;
