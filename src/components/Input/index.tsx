import React from 'react';
import { BackgroundInput, ContainerInput, TextInputComponent } from './styles';

const Input = ({ ...rest }) => {
  return (
    <ContainerInput>
      <BackgroundInput>
        <TextInputComponent {...rest} placeholder="Adicione uma nova tarefa" />
      </BackgroundInput>
    </ContainerInput>
  );
};

export default Input;
