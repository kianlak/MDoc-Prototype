import { Text, View } from "react-native";
import HomeButton from "./components/record-button";

function HomeScreen(): React.JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <HomeButton />
    </View>
  );
}

export default HomeScreen;