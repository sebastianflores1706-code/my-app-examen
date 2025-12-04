import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const PRODUCTS: Product[] = [
  { 
    id: "1", 
    name: "Laptop", 
    price: 15000,
    description: "Laptop versátil con gran rendimiento para clases, trabajo y multitarea."
  },
  { 
    id: "2", 
    name: "Mouse", 
    price: 250,
    description: "Mouse ligero y preciso ideal para uso diario con diseño cómodo."
  },
  { 
    id: "3", 
    name: "Audífonos", 
    price: 500,
    description: "Audífonos con sonido claro y almohadillas cómodas para largos periodos."
  },
];

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>

      <FlatList
        data={PRODUCTS}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => navigation.navigate("Detail", { product: item })}
          />
        )}
      />

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#4A90E2" }]}
          onPress={() => navigation.navigate("Users")}
        >
          <Text style={styles.btnText}>Ver usuarios (API)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#50C878" }]}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.btnText}>Abrir cámara</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, backgroundColor: "#fff" },

  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 14,
    color: "#333",
  },

  buttons: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  btn: {
    paddingVertical: 14,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
