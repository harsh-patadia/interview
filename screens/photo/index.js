import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PhotoApi = "https://jsonplaceholder.typicode.com/photos";

const Photo = ({ route }) => {
  const { id } = route.params; // Access `id` from navigation route parameters
  const [albumData, setAlbumData] = useState([]);

  const FetchData = async () => {
    try {
      const TempData = await axios.get(PhotoApi, {
        params: { albumId: id },
      });
      setAlbumData(TempData.data); // Extract `data` from response object
      console.log(TempData.data);
    } catch (error) {
      console.error("Error fetching photo data:", error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {albumData.map((item) => {
          return (
            <View key={item.id}>
              <View style={styles.title}>
                <Text>{item.title}</Text>
              </View>
              <View style={{ height: 100, width: 100, justifyContent: "center" }}>
                <Image
                  source={{ uri: item.thumbnailUrl }}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    paddingBottom: 5,
  },
});

export default Photo;
