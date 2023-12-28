import React, {useState} from 'react';
import {
  Pressable,
  PressableProps,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import tailwind from 'twrnc';

type ButtonVariant = 'default' | 'success' | 'destructive';

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  icon?: (style: TextStyle[]) => React.ReactNode;
  text: string;
  textStyle?: TextStyle;
  iconStyle?: TextStyle;
}

/**
 * React Native button component built with Tailwind CSS
 */
export const Button = ({
  text,
  icon,
  variant = 'default',
  style,
  textStyle,
  ...props
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const variants = {
    default: {
      bg: tailwind`dark:bg-gray-900 bg-gray-100`,
      hover: tailwind`dark:bg-gray-900 bg-gray-200`,
      text: tailwind`dark:text-gray-50 text-gray-900`,
    },
    success: {
      bg: tailwind`bg-green-700`,
      hover: tailwind`bg-green-800`,
      text: tailwind`text-green-50`,
    },
    destructive: {
      bg: tailwind`bg-red-700`,
      hover: tailwind`bg-red-800`,
      text: tailwind`text-red-50`,
    },
  };

  return (
    <Pressable
      {...props}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        tailwind`h-10 px-4 flex-row gap-2 items-center justify-center rounded-md`,
        variants[variant].bg,
        hovered || pressed ? variants[variant].hover : null,
        // todo: fix ts error
        style as ViewStyle,
      ]}>
      {icon ? icon([tailwind`text-lg`, variants[variant].text]) : null}
      {text ? (
        <Text style={[tailwind`font-bold`, variants[variant].text, textStyle]}>
          {text}
        </Text>
      ) : null}
    </Pressable>
  );
};
