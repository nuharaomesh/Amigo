import {
  Button,
  Input,
  Modal,
  Radio,
  RadioGroup,
  Text,
} from "@ui-kitten/components";
import { ScrollView, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

export default function FinanceModal(props) {
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [type, setType] = useState(0); // 0 = Income, 1 = Expense

  const handleAdd = () => {
    console.log({
      amount,
      category,
      type: type === 0 ? "Income" : "Expense",
      note,
    });
    props.setVisible(false);
  };
  return (
    <Modal
      visible={props.visible}
      style={{
        width: 340,
        height: 500,
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#181818",
      }}
    >
      <Button
        style={style.backButton}
        onPress={() => props.setVisible(false)}
        accessoryLeft={(props) => (
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={14}
            color="white"
          />
        )}
      />
      <ScrollView>
        <Text
          category="h6"
          style={{ marginTop: 10, marginLeft: 5, marginBottom: 10 }}
        >
          Add Transaction
        </Text>

        <Input
          placeholder="Enter amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
          style={style.input}
        />

        <Input
          placeholder="Category (e.g., Salary, Stock Market, etc.)"
          value={category}
          onChangeText={(text) => setCategory(text)}
          style={style.input}
        />

        <Text style={style.label}>Transaction Type</Text>
        <RadioGroup
          selectedIndex={type}
          onChange={(index) => setType(index)}
          style={style.radioGroup}
        >
          <Radio>Income</Radio>
          <Radio>Expense</Radio>
        </RadioGroup>

        <Input
          placeholder="Additional Notes"
          value={note}
          onChangeText={(text) => setNote(text)}
          multiline={true}
          textStyle={{ minHeight: 60 }}
          style={style.input}
        />

        {/* Add Button */}
        <Button onPress={handleAdd} style={style.button}>
          Add
        </Button>
      </ScrollView>
    </Modal>
  );
}

const style = StyleSheet.create({
  backButton: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "black",
    borderWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 32,
    height: 32,
  },
  input: {
    marginBottom: 12,
    backgroundColor: "#181818",
    borderWidth: 2,
    borderColor: "#212121",
  },
  radioGroup: {
    flexDirection: "row",
    marginVertical: 8,
  },
  label: {
    marginTop: 8,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#173459",
    borderWidth: 0,
    marginTop: 12,
  },
});
