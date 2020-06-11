import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "react-native-vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroudStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={{ marginLeft: 5 }}
        placeholderTextColor="#FFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroudStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    backgroundColor: "#CCC",
    marginTop: 5,
  },
  inputStyle: { borderColor: "black", borderWidth: 1, flex: 1 },
  iconStyle: { fontSize: 35, alignSelf: "center", marginHorizontal: 15 },
});
export default SearchBar;
