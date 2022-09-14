import styled, { css } from 'styled-components/native';

export const Container = styled.Pressable`
  ${({ theme }) => css`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: ${theme.colors.backdrop.main};
    align-items: center;
    justify-content: center;
  `}
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 10px;
  height: 10px;
  position: absolute;
`;
