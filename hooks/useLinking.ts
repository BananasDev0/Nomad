import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function useLinking() {
    const [count] = useState(5);
    const [currentStep] = useState(2);
    const navigation = useNavigation<any>();
    const [search, setSearch] = useState("");

    const friends = ["Roel Calvillo Ramirez", "Alice Johnson", "Bob Smith", "Charlie Brown", "Diana Prince"];

    // 1. Amigos que ya están tomados
    const takenFriends = ["Alice Johnson", "Bob Smith"];

    // 2. Estado seleccionado (puede inicializar con alguno de los tomados)
    const [selectedFriend, setSelectedFriend] = useState<string | null>();

    const navigateToPreferences = () => {
        navigation.navigate("PreferencesLinkScreen");
    }

    const handleSelectFriend = (name: string) => {
        // 3. No permitir seleccionar si está tomado
        if (takenFriends.includes(name)) return;

        setSelectedFriend(name === selectedFriend ? null : name);
    };

    const filteredFriends = friends.filter((f) =>
        f.toLowerCase().includes(search.toLowerCase())
    );

    return { 
        count,
        currentStep,
        navigateToPreferences,
        search,
        setSearch,
        filteredFriends,
        selectedFriend,
        handleSelectFriend,
        takenFriends, // opcional si quieres usarlo en el screen
    };
}
