import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { Props } from './types';

import * as S from './styled';

const Button = ({
  title,
  onPress,
  disabled,
  icon,
  background,
  color,
  outlined,
  textType = 'regular',
  ...rest
}: Props) => {
  const { colors } = useTheme();

  const tintColor = useMemo(() => {
    if (color) return color;
    if (disabled) return colors.backdrop.main;
    return outlined ? colors.backdrop.main : colors.background.main;
  }, [color, disabled, outlined, colors]);

  return (
    <S.Container
      onPress={onPress}
      disabled={disabled}
      outlined={outlined || disabled}
      background={background}
      {...rest}
    >
      {!!icon && (
        <>
          {icon}
          <S.SpacingIcon />
        </>
      )}
      <S.Title color={tintColor} type={textType}>
        {title}
      </S.Title>
    </S.Container>
  );
};

export default Button;
