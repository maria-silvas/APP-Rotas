import { ScrollView, Text, View } from "react-native";
import styles from "../config/styles";

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView>
          <Text>Sobre o App</Text>
          <Text>
          ola
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
;;