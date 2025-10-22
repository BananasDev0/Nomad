import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function useTrip(){
    const navigation = useNavigation<any>();
    const [tripName, setTripName] = useState("");
    const [destination, setDestination] = useState("");
    const [travelByPlane, setTravelByPlane] = useState(false);
    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const [showArrivalPicker, setShowArrivalPicker] = useState(false);
    const [showDeparturePicker, setShowDeparturePicker] = useState(false);
    const [stayPlace, setStayPlace] = useState("");
    const [currentStep] = useState(1);
    
    const handleArrivalConfirm = (date: Date) => {
        setArrivalDate(date);
        setShowArrivalPicker(false);
    };
    
    const handleDepartureConfirm = (date: Date) => {
        setDepartureDate(date);
        setShowDeparturePicker(false);
    };
    
    const sendToShareAndCollaboratorsScreen = () => {
        navigation.navigate("ShareAndCollaboratorsScreen");
    }

    return {
        tripName,
        setTripName,
        destination,
        setDestination,
        travelByPlane,
        setTravelByPlane,
        arrivalDate,
        departureDate,
        showArrivalPicker,
        setShowArrivalPicker,
        showDeparturePicker,
        setShowDeparturePicker,
        stayPlace,
        setStayPlace,
        handleArrivalConfirm,
        handleDepartureConfirm,
        sendToShareAndCollaboratorsScreen,
        currentStep
    };
}