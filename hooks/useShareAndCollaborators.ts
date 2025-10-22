import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function useShareAndCollaborators() {
    const navigation = useNavigation<any>();
    const [currentStep] = useState(2);
    const [count, setCount] = useState(1);
    const [tripOwner] = useState("Roel Calvillo Ramirez");
    const [search, setSearch] = useState("");
    const [friendName, setFriendName] = useState("");
    const [friends, setFriends] = useState<string[]>([tripOwner]);
    const [selectedFriend, setSelectedFriend] = useState<string | null>(null);
    
    const handleAddFriend = () => {
        if (friendName.trim() !== "") {
          setFriends([...friends, friendName.trim()]);
          setCount(count + 1);
          setFriendName("");
        }
    };
    
    const handleSelectFriend = (name: string) => {
        setSelectedFriend(name === selectedFriend ? null : name);
    };
    
    const filteredFriends = friends.filter((f) =>
        f.toLowerCase().includes(search.toLowerCase())
    );


    return {
        navigation,
        count,
        setCount,
        tripOwner,
        search,
        setSearch,
        friendName,
        setFriendName,
        friends,
        setFriends,
        selectedFriend,
        setSelectedFriend,
        handleAddFriend,
        handleSelectFriend,
        filteredFriends,
        currentStep
    };
}