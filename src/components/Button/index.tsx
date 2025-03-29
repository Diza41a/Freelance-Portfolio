import S from './styles';
import type { JSX } from 'react';
import type { ButtonProps } from './props';

const Button = (props: ButtonProps): JSX.Element => {
  const { children, styleVariant = 'primary', fontSize = 16, padding, ...rest } = props;

  return (
    <S.Button {...rest} fontSize={fontSize} padding={padding} styleVariant={styleVariant}>
      {children}
    </S.Button>
  );
};

export default Button;
