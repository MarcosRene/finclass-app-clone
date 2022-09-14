import styled, { css } from 'styled-components/native';
import { Props } from './types';

export const Container = styled.View<Props>`
  ${({ amount = 0 }) => css`
    width: ${amount * 10}px;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Dot = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.primary.main};
    width: 4px;
    height: 4px;
    border-radius: 2px;
  `}
`;
