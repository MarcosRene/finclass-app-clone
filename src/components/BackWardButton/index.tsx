import React from 'react';
import { useTheme } from 'styled-components';

import { Props } from './types';

import chevronLeft from '../../../assets/icons/chevron-left.png';

import * as S from './styled';

const BackWardButton = ({ onPress }: Props) => {
  const { colors } = useTheme();

  return (
    <S.Container onPress={onPress}>
      <S.Icon
        style={{ tintColor: colors.backdrop.onMain }}
        source={chevronLeft}
      />
    </S.Container>
  );
};

export default BackWardButton;
