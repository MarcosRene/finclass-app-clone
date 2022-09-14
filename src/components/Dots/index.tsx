import React, { useMemo } from 'react';

import { Props } from './types';

import * as S from './styled';

const Dots = ({ amount }: Props) => {
  const dotsList = useMemo(() => {
    return Array(amount).fill(0, 0, amount);
  }, [amount]);

  return (
    <S.Container amount={amount}>
      {dotsList.map((_, index) => (
        <S.Dot key={`${index}-dot`} />
      ))}
    </S.Container>
  );
};

export default Dots;
