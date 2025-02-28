import { ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import style from "../styles";
import LinerChart from "@/components/LinerChart";

export default function Dashboard() {

    const barData = [
        {value: 250, label: 'M'},
        {value: 500, label: 'T', frontColor: '#177AD5'},
        {value: 745, label: 'W', frontColor: '#177AD5'},
        {value: 320, label: 'T'},
        {value: 600, label: 'F', frontColor: '#177AD5'},
        {value: 256, label: 'S'},
        {value: 300, label: 'S'},
    ];

    return (
        <View>
            <ScrollView style={{marginBottom: 5}}>
                <View>
                    <Text style={style.title}>Hello, Omesh!</Text>
                    <Text style={{color: "#B1B1B1"}}> See yourself through your amigo</Text>
                </View>
                <View>
                    <Card style={{borderRadius: 5, backgroundColor: "#1F1F1F", marginTop: 10, height: 97}}>
                        <Card.Content>
                            <View>
                                <Text style={{color: "#CACACA", fontSize: 13}}>See your income</Text>
                            </View>
                            <Text style={{color: "#1FC757", fontSize: 28, marginTop: 10, fontWeight: "bold"}}>10,123$</Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={{marginTop: 10}}>
                    {/* Linear chart */}
                    <LinerChart/>
                </View>
                <View style={{height: 100, backgroundColor: "#1F1F1F", marginTop: 10, borderRadius: 10}}>

                </View>
            </ScrollView>
        </View>
    )
}
