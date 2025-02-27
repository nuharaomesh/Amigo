import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "black",
    },
    tabItem: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    pressedTab: {
        opacity: 0.7,
    },
    activeTab: {
        height: 'auto',
        backgroundColor: "#213555",
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
    },
    header: {
        height: 50,
        backgroundColor: "black",
    },
    bottomBar: {
        height: 85,
        borderRadius: 25,
        overflow: "hidden",
        backgroundColor: "#181818",
        borderBlockColor: "black",
    },
    text: {
        color: "white"
    }
})

export default style