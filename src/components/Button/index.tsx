import S, { classNames } from './styles';
import type { JSX } from 'react';
import type { ButtonProps } from './props';

const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    styleVariant = 'primary',
    fontSize = 16,
    padding = '8px 16px',
    borderRadius = 8,
    component = 'button',
    target = '_blank',
    rel = 'noopener noreferrer',
    className = '',
    disabled,
    ...rest
  } = props;

  const anchorProps = component === 'a' ? { target, rel } : {};

  return (
    <S.Button
      {...rest}
      fontSize={fontSize}
      padding={padding}
      styleVariant={styleVariant}
      borderRadius={borderRadius}
      component={component}
      className={`${classNames.root} ${className}`}
      disabled={disabled}
      {...anchorProps}
    >
      {children}
    </S.Button>
  );
};

export default Button;
