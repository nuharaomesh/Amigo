import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import OptionSelector from "@/components/OptionSelector";
import FinanceStatView from "@/components/FinanceStatView";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import FinanceModal from "@/components/FinanceModal";

export default function Finance() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <View style={style.header}>
        <View style={style.monthSelector}>
          <OptionSelector />
        </View>
        <View>
          <Pressable
            style={({ pressed }) => ({
              width: 30,
              height: 30,
              backgroundColor: pressed ? "#CBCBCB" : "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            })}
            onPress={() => setVisible(true)}
          >
            <MaterialCommunityIcons name="plus" size={20} color="gray" />
          </Pressable>
          <FinanceModal visible={visible} setVisible={setVisible}/>
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 40 }}>
          <Text style={style.salaryStat}>
            19,735
            <Text
              style={{ fontSize: 21, color: "#1FC757", fontWeight: "bold" }}
            >
              $
            </Text>
          </Text>
          <Text style={{ fontSize: 12, color: "#BABABA", fontWeight: "bold" }}>
            Monthly cash flow
          </Text>
        </View>
        <View style={style.financeStat}>
          <FinanceStatView
            type={"income"}
            value={"12,241"}
            valueType={"Income"}
          />
          <FinanceStatView
            type={"expenses"}
            value={"1,221"}
            valueType={"Expenses"}
          />
        </View>
      </View>
      <ScrollView
        style={{
          height: 280,
          marginTop: 10,
          overflow: "hidden",
          borderRadius: 10,
        }}
      >
        <View style={style.body}></View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  header: {},
  body: {
    backgroundColor: "#141414",
    height: 400,
    borderRadius: 10,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  monthSelector: {
    width: "auto",
    height: 40,
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
  },
  financeStat: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 40,
    width: 290,
    height: 70,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#303030",
    display: "flex",
    flexDirection: "row",
  },
  salaryStat: {
    fontSize: 30,
    color: "#1FC757",
    fontWeight: "bold",
  },
});
