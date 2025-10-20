import { Text, View } from "react-native";

export default function EditScreenInfo({ path }: { path: string }) {
  const title = "Open up the code for this screen:";
  const description =
    "Change any of the text, save the file, and your app will automatically update.";

  return (
    <View className="items-center mx-12">
      <Text className="text-lg leading-6 text-center font-semibold text-gray-900">
        {title}
      </Text>

      <View className="rounded-md px-1.5 my-2 bg-gray-100">
        <Text className="text-gray-700 font-mono">{path}</Text>
      </View>

      <Text className="text-base leading-6 text-center text-gray-600 mt-2">
        {description}
      </Text>
    </View>
  );
}
