import React from 'react';
import {
  type GestureResponderEvent,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
export interface CombinedPressableProps extends PressableProps {
  onPress?: (event: GestureResponderEvent) => void;
  onDoublePress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  disableDoublePress?: boolean;
  doublePressDelay?: number;
  bounceEffectIn?: number;
  bounceEffectOut?: number;
  bounceVelocityIn?: number;
  bounceVelocityOut?: number;
  bouncinessIn?: number;
  bouncinessOut?: number;
  useNativeDriver?: boolean;
  children?: React.ReactNode;
  style?: CustomStyleProp;
}
export default function CombinedPressable({
  onPress,
  onDoublePress,
  onLongPress,
  disableDoublePress,
  doublePressDelay,
  bounceEffectIn,
  bounceEffectOut,
  bounceVelocityIn,
  bounceVelocityOut,
  bouncinessIn,
  bouncinessOut,
  useNativeDriver,
  children,
  style,
  ...props
}: CombinedPressableProps): import('react/jsx-runtime').JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map
