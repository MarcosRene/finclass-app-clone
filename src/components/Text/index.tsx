import React from 'react';

import * as S from './styled';
import { Props } from './types';
import { useTheme } from 'styled-components';

const Text = ({
  children,
  type = 'regular',
  size = 14,
  color,
  ...rest
}: Props) => {
  const { colors } = useTheme();

  return (
    <S.Container
      type={type}
      size={size}
      color={color || colors.background.onMain}
      {...rest}
    >
      {children}
    </S.Container>
  );
};

export default Text;
