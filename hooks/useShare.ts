import { useNavigation } from "@react-navigation/native";

export default function useShare() {
    const navigation = useNavigation<any>();
  const navigateToHome = () => {
    navigation.navigate("HomeScreen");
  };
    return { navigateToHome };
}