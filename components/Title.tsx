import useBasicNavigations from "hooks/useBasicNavigations";
import { ChevronLeft } from "lucide-react-native";
import { Text ,Pressable, View } from "react-native";

type TitleProps = {
    title: string;
};


export default function Title({title} : TitleProps) {
      const { navigateToback } = useBasicNavigations();
    return (
        <>
            <View className="relative flex-row items-center p-4">
                {/* Botón de atrás */}
                <Pressable onPress={navigateToback} className="z-10">
                    <ChevronLeft size={28} color="#0d171b" />
                </Pressable>

                {/* Título centrado */}
                <Text className="absolute left-0 right-0 text-center text-2xl font-bold text-[#1F2937]">
                {title}
                </Text>
            </View>
        </>
    );
}