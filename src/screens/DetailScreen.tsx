import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function DetailScreen({ route }: Props) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  name: { fontSize: 28, fontWeight: "bold" },
  price: { fontSize: 22, marginBottom: 10 },
  desc: {
    fontSize: 16,
    color: "#444",
    marginTop: 10,
    lineHeight: 22,
  },
});
