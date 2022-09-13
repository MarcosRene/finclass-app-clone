import React from 'react';

import { Props } from './types';

import * as S from './styled';

const Separetor = ({ width, height }: Props) => {
  return <S.Container width={width} height={height} />;
};

export default Separetor;
