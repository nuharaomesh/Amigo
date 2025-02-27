import { ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import style from "../styles";

export default function Dashboard() {
    return (
        <View>
            <ScrollView>
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
                <View style={{height: 280, backgroundColor: "#1F1F1F", marginTop: 10}}>

                </View>
                <View style={{height: 100, backgroundColor: "#1F1F1F", marginTop: 10, borderRadius: 10}}>

                </View>
            </ScrollView>
        </View>
    )
}
