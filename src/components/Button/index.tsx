import React from 'react';
import { BackgroundButton, ButtonComponent } from './styles';
import PlusSvg from '../../assets/image/Plus.svg';

const Button = ({ ...rest }) => {
  return (
    <BackgroundButton>
      <ButtonComponent {...rest}>
        <PlusSvg width={18} height={18} />
      </ButtonComponent>
    </BackgroundButton>
  );
};

export default Button;
