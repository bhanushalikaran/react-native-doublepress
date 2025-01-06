import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Pressable,
  type GestureResponderEvent,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const DEFAULT_DOUBLE_PRESS_DELAY = 250;

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface CombinedPressableProps extends PressableProps {
  onPress?: (event: GestureResponderEvent) => void; // Single press or fallback
  onDoublePress?: (event: GestureResponderEvent) => void; // Double press
  onLongPress?: (event: GestureResponderEvent) => void; // Long press
  disableDoublePress?: boolean; // Disable double press functionality
  doublePressDelay?: number; // Custom delay for double press
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
  disableDoublePress = false,
  doublePressDelay = DEFAULT_DOUBLE_PRESS_DELAY,
  bounceEffectIn = 0.93,
  bounceEffectOut = 1,
  bounceVelocityIn = 0.1,
  bounceVelocityOut = 0.4,
  bouncinessIn = 0,
  bouncinessOut = 0,
  useNativeDriver = true,
  children,
  style,
  ...props
}: CombinedPressableProps) {
  const lastPressTimeRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bounceValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handlePress = (event: GestureResponderEvent) => {
    const currentTime = Date.now();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (
      !disableDoublePress &&
      onDoublePress &&
      lastPressTimeRef.current &&
      currentTime - lastPressTimeRef.current <= doublePressDelay
    ) {
      onDoublePress(event);
      lastPressTimeRef.current = null;
      return;
    }

    lastPressTimeRef.current = currentTime;
    timeoutRef.current = setTimeout(() => {
      onPress?.(event);
      lastPressTimeRef.current = null;
    }, doublePressDelay);
  };

  const bounceAnimation = (
    value: number,
    velocity: number,
    bounciness: number
  ) => {
    Animated.spring(bounceValue, {
      toValue: value,
      velocity,
      bounciness,
      useNativeDriver,
    }).start();
  };

  return (
    <AnimatedPressable
      {...props}
      style={[{ transform: [{ scale: bounceValue }] }, style]}
      onPressIn={() =>
        bounceAnimation(bounceEffectIn, bounceVelocityIn, bouncinessIn)
      }
      onPressOut={() =>
        bounceAnimation(bounceEffectOut, bounceVelocityOut, bouncinessOut)
      }
      onPress={handlePress}
      onLongPress={onLongPress}
    >
      {children}
    </AnimatedPressable>
  );
}
