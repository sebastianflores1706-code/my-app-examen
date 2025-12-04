import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from "../types/product";

interface Props {
  item: Product;
  onPress: () => void;
}

export default function ProductCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  price: { marginTop: 4, fontSize: 16 },
});
