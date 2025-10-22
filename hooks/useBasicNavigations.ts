import { useNavigation } from "@react-navigation/native";

export default function useBasicNavigations() {
    const navigation = useNavigation<any>();

    const navigateToback = () => {
        navigation.goBack();
    };

    return {
    navigateToback,
    };
}