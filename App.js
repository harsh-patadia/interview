import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const data = [
  { name: "Alice", age: 25, address: "123 St" },
  { name: "Bob", age: 30, address: "456 St" },
  { name: "Charlie", age: 25, address: "789 St" },
  { name: "David", age: 30, address: "101 St" }
];

export default function App() {

  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flex:1,
    backgroundColor:'pink'
  },
  container: {
    flex: 4,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  footer:{
    flex:1,
    backgroundColor:'grey'
  }
});
