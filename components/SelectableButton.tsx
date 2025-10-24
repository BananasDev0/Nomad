import { Text ,TouchableOpacity } from "react-native";

type SelectableButtonProps = {
    enabled: boolean;
    text : string;
    action: () => void;
};

export default function SelectableButton({enabled, text , action}: SelectableButtonProps) {
  return (
    <>
            <TouchableOpacity
            className={`mt-6 p-4 rounded-2xl items-center mb-10 ${
              enabled ? "bg-[#003c49]" : "bg-[#D1D5DB]"
            }`}
            disabled={!enabled}
            onPress={action}
          >
            <Text className={`text-lg font-bold text-center ${enabled ? "text-white" : "text-[#374151]"}`}>
              {text}
            </Text>
          </TouchableOpacity>
    </>
  );
}