import { useNavigation } from "@react-navigation/native";

export default function useHome() {
    const navigation = useNavigation<any>();
  
    const sendToAddTrip = () => {
      navigation.navigate("TripScreen");
    }
  
    const sendToUserScreen = () => {
      navigation.navigate("UserScreen");
    }

    const sendToItineraryScreen = () => {
        navigation.navigate("ItineraryScreen")
    }

    const TRIPS = [
        {
            title: "Parisian Dream",
            date: "Aug 15 - Aug 22",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtsBXjgi9p9R1JqpyAMnmO5P_RqGXjrWREbljkWB2Rjzf8c3hsq5dkdsOLUHeCTfOHzF2rh4nnOmodg7matYhEK2ftedYCvd1072Vzo3arHyfTa5Dv2yEos6NptRApEciWeYY2PN90t0xq2rl0WAsIZFEsogLnPUhjeeZDCmQUQJNdGJ4b5PZ6zZKUBDZSK5bw34ofMpRv8pk74fokDQ1FqqqinorORH622rN7HbtGu8dGl8s9Te59--vDPWIMcUAkLxYVwpgL7GHQ",
            avatars: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBCODCBmfgtvXb7E-0jnIPBhna_XKnB5pSnT4xAsWl4DvzO3zmE93v42wtPNNeKXqNUGuAHpPxlshnVq1tIGe_7XPyychjDBP9vSU8xQa877iab0oIL9yq1bNDY1LT3ZXpSYnJlhila_f5NNB8CAMGuR6-iMvM0YW_i6XybErtAjPI6-UdmwMVdO0RJ7JnmjtsscuefbG8zao_oDNmOSh3T_20i1w2n8CWkXY0kcm0KigyrqFgJ3i0Apg2Nyae_lj2rSGcj0dbasCOq",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCWtUhW007RyYzJ6FL1RfBkgj-aPXkqCEdr-Dnn43eNLblgZ0Veo419ZjQQ82LZhDxVBzdwwYx4NmOuqMKIYmkmzdBbbYmfilwQD6pG8rQttnKOrjxmUnj1q6O7WK-Q8cSViZpbzXKFIQLx_6rQUJB9U2MJhScNWONMdOZCcQNpU-7eo6Hy2X4Mk4pL6D1QYnjIW86RcH5ONuMGOR7oY7_yZmzya_V8N-38jNbECqHaEnyYsUNx6cDak5F3bF-fqqajO8vpAnnoDKFR",
            ],
        },
        {
            title: "Bali Adventure",
            date: "Sep 10 - Sep 20",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn90XbZ0vMLfYvjeR8lx9ja3AHw_Hygaty0WSG8HPf5EtpmZ_190gJSQhTbzOkuL1_qjntlkRnFfoPPFRCj9ic23-wka0t8H017Jy2nqol4PT1T0JAZK3vs6PYik9_wpirB6oG6ET4g7UU7T_C-R5TGUANA-s4uDoKQL_i-OBGr93XByUXwCNfKYWPTaMrhShmi0ai7dTT_3nYUCUsEmeFtSa6_m2qIK3ylQaamwsynrY_gun7XbCbeI41pOTTe-ooeDcUBFJsVHoI",
            avatars: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4jwQjzIar7OrZIu75T2XY7dJ4SRMifyO0V14HcEy8tgSwr-A8kNla5YFuRR650jx8IvU8zqCDaQUpkuJ2t2eahvfKQNuDT5qR9NM34M6aemqAB8ghinsFYZAd1PSdvBr5v_wdPj7Xg2yValDd8nx1SwgvWSHzgYrBf6yqCF8oXGOqWAnDmi70qLQ3-g-suZqAw9VZnCnvM-WRYvHcf2Y5BAswgxy7K2mECGKrJgFCgt0Y6votBCmkXyetjLz3uNXdN1hL8yBQemU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCWtUhW007RyYzJ6FL1RfBkgj-aPXkqCEdr-Dnn43eNLblgZ0Veo419ZjQQ82LZhDxVBzdwwYx4NmOuqMKIYmkmzdBbbYmfilwQD6pG8rQttnKOrjxmUnj1q6O7WK-Q8cSViZpbzXKFIQLx_6rQUJB9U2MJhScNWONMdOZCcQNpU-7eo6Hy2X4Mk4pL6D1QYnjIW86RcH5ONuMGOR7oY7_yZmzya_V8N-38jNbECqHaEnyYsUNx6cDak5F3bF-fqqajO8vpAnnoDKFR",
            ],
        },
        {
            title: "Tokyo Highlights",
            date: "Oct 5 - Oct 12",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgXoXK1b1Y8f5j1YkT3F2Z4EJ1k9Z3F2c1cXG5vLz8F7QYkJt8v3Hq3bX5yW8JqfX9YzR6a8bN4mO7pP3Q2R1X5e6D7c8E9F0G1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W7X8Y9Z0a1b2c3d4e5f6g7h8i9j0k",
            avatars: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBCODCBmfgtvXb7E-0jnIPBhna_XKnB5pSnT4xAsWl4DvzO3zmE93v42wtPNNeKXqNUGuAHpPxlshnVq1tIGe_7XPyychjDBP9vSU8xQa877iab0oIL9yq1bNDY1LT3ZXpSYnJlhila_f5NNB8CAMGuR6-iMvM0YW_i6XybErtAjPI6-UdmwMVdO0RJ7JnmjtsscuefbG8zao_oDNmOSh3T_20i1w2n8CWkXY0kcm0KigyrqFgJ3i0Apg2Nyae_lj2rSGcj0dbasCOq",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCWtUhW007RyYzJ6FL1RfBkgj-aPXkqCEdr-Dnn43eNLblgZ0Veo419ZjQQ82LZhDxVBzdwwYx4NmOuqMKIYmkmzdBbbYmfilwQD6pG8rQttnKOrjxmUnj1q6O7WK-Q8cSViZpbzXKFIQLx_6rQUJB9U2MJhScNWONMdOZCcQNpU-7eo6Hy2X4Mk4pL6D1QYnjIW86RcH5ONuMGOR7oY7_yZmzya_V8N-38jNbECqHaEnyYsUNx6cDak5F3bF-fqqajO8vpAnnoDKFR",
            ],
        }
    ];
  return {
    sendToAddTrip,
    sendToUserScreen,
    sendToItineraryScreen,
    TRIPS,
  };
}