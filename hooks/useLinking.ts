import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function useLinking() {
    const [count] = useState(5);
    const [currentStep] = useState(2);
    const navigation = useNavigation<any>();
    const [search, setSearch] = useState("");
    const [friends] = useState<string[]>(["Roel Calvillo Ramirez", "Alice Johnson", "Bob Smith", "Charlie Brown", "Diana Prince"]);
    const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

    const navigateToPreferences=()=>{
        navigation.navigate("PreferencesLinkScreen");
    }

    const handleSelectFriend = (name: string) => {
        setSelectedFriend(name === selectedFriend ? null : name);
    };

    const filteredFriends = friends.filter((f) =>
        f.toLowerCase().includes(search.toLowerCase())
    );
    return{ 
    count,
    currentStep,
    navigateToPreferences,
    search,
    setSearch,
    filteredFriends,
    selectedFriend,
    handleSelectFriend
    };
}