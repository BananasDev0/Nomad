import React from 'react';
import { Text, View } from 'react-native';
import EditScreenInfo from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">{title}</Text>
      <View className="w-4/5 h-px my-8 bg-gray-300" />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
