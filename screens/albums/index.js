import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Api = "https://jsonplaceholder.typicode.com/albums";

const Albums = ({ navigation }) => {
  const [data, setData] = useState([]);

  // Fetch data from API
  const FetchData = async () => {
    try {
      const TempData = await axios.get(Api);
      setData(TempData.data);  // Extract `data` from response object
      console.log(TempData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item) => (
          <View key={item.id}>
            <TouchableOpacity onPress={() => navigation.navigate("photo", { id: item.id })}>
              <Text style={{ fontSize: 18 }}>
                {item.title}
                </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default Albums;
