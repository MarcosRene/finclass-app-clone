import { TextProps } from 'react-native';
import { TypographyType } from 'styled-components';

export interface Props {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  outlined?: boolean;
  textType?: TypographyType;
}

export type ContainerProps = Pick<
  Props,
  'disabled' | 'background' | 'outlined'
>;

export interface TitlePros {
  type: TypographyType;
  color: string;
}
