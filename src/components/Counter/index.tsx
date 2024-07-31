import React from 'react';

import {
  BackgroundCounter,
  CounterComponent,
  CreatedText,
  ContainerCounter,
} from './styles';
import theme from '../../theme/theme';

type Props = {
  title: string;
  number: number;
  textColor: string;
};

const Counter = ({ title, number, textColor }: Props) => {
  const textColorProp =
    textColor === 'blue' ? theme.colors.blue : theme.colors.purple;

  return (
    <>
      <ContainerCounter>
        <CreatedText textColor={textColorProp}>{title}</CreatedText>

        <BackgroundCounter>
          <CounterComponent>{number}</CounterComponent>
        </BackgroundCounter>
      </ContainerCounter>
    </>
  );
};

export default Counter;
