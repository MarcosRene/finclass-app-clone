import styled, { css } from 'styled-components/native';
import { ContainerProps } from './types';

export const Container = styled.View<ContainerProps>`
  ${({ width = 0, height = 0 }) => css`
    width: ${width}px;
    height: ${height}px;
  `};
`;
