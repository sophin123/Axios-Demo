import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import axios from "axios";
import SearchBox from "../component/SearchBox";
import { useEffect } from "react";

export default function HomeScreen() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (id) => {
    console.log(id);

    let result = allData.filter((results) => {
      return results.id == id;
    });

    console.log("Result Data : ", result);
    if (result.length === 0) {
      setFilteredData(allData);
      console.log("All data is called");
    } else {
      setFilteredData(result);
      console.log("Only Filtered Data is called");
    }

    // setFilteredData(result);
  };

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setAllData(res.data);
        setFilteredData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <SearchBox onChangeText={handleSearch} />
      <ScrollView>
        {filteredData.map((list) => (
          <Text key={list.id} style={styles.textStyle}>
            {list.id} {list.title}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  flatListStyle: {
    width: 200,
    height: 200,
  },
  textStyle: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
  },
});
