import styled, { css } from 'styled-components/native';
import { TextStyleProps } from './types';

export const Container = styled.Text<TextStyleProps>`
  ${({ theme, type, size, color }) => css`
    font-family: ${theme.typography[type].fontFamily};
    font-size: ${size}px;
    letter-spacing: ${theme.typography[type].letterSpacing}px;
    color: ${color};
  `}
`;
