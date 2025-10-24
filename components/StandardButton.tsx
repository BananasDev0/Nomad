import { Text, Pressable } from "react-native";

type StandarButtonProps = {
    text : string;
    action: () => void;
};

export default function StandarButton({text,action}: StandarButtonProps) {
  return (
    <>
        <Pressable 
        className="bg-[#003c49] rounded-xl py-4 p6 mx-4 mt-4"
        onPress={action}
        >
            <Text className="text-white text-center font-bold text-lg">{text}</Text>
        </Pressable>
    </>
  );
}