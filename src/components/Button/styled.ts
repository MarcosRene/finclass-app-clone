import styled, { css } from 'styled-components/native';
import { ContainerProps, TitlePros } from './types';

export const Container = styled.Pressable<ContainerProps>`
  ${({ theme, disabled, outlined, background }) => css`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-color: ${disabled
      ? theme.colors.backdrop.main
      : theme.colors.placeholder.main};
    border-width: ${outlined ? 1.5 : 0}px;
    border-radius: ${theme.borders.radius.sm}px;
    background: ${() => {
      if (outlined) {
        return 'transparent';
      }
      return background || theme.colors.primary.main;
    }};
  `}
`;

export const Title = styled.Text<TitlePros>`
  ${({ theme, type, color }) => css`
    font-size: 12px;
    font-family: ${theme.typography[type].fontFamily};
    letter-spacing: ${theme.typography[type].letterSpacing}px;
    color: ${color};
  `}
`;

export const SpacingIcon = styled.View`
  width: 16px;
`;
