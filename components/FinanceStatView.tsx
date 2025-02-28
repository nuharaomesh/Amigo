import { Image, Text, View } from "react-native";

export default function FinanceStatView(props) {
    return (
        <View style={{display: "flex", flexDirection: 'row', width: '50%', alignSelf: "center", marginLeft: 5}}>
            <View style={{marginRight: 6}}>
                <Image
                    style={{width: 35, height: 35, borderRadius: 40}}
                    source={props.type == "income" ? require("@/assets/Group 7.png") : require("@/assets/Group 6.png")}
                />
            </View>
            <View style={{width: 65, height: 20, }}>
                <Text style={{color: "white", fontWeight: "bold", fontSize: 14}}>{props.value}$</Text>
                <Text style={{color: "#737373", fontWeight: "bold", fontSize: 11}}>{props.valueType}</Text>
            </View>
            <View>
                
            </View>
        </View>
    )
}