import { View } from "react-native";

type BarStepsProps = {
    currentStep: number;
};

export default function BarSteps({currentStep}: BarStepsProps) {
    return (
        <>
            <View className="h-2 bg-gray-200 rounded-full mx-6 my-4 overflow-hidden">
                <View
                className="h-2 bg-[#003c49] rounded-full"
                style={{ width: `${(currentStep / 4) * 100}%` }}
                />
            </View>
        </>
    );
}