import React, { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';  // or 'react-native-vector-icons/Ionicons'
import { StyleProp, TextStyle } from 'react-native';

type IconProps = {
  style?: StyleProp<TextStyle>;
  name: ComponentProps<typeof Ionicons>['name'];
  color?: string;
};

export function TabBarIcon({ style, ...rest }: IconProps) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
