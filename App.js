import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

// importation des pages
import FirstPage from "./screens/FirstPage";
import SecondePage from "./screens/SecondePage";
import ThirdPage from "./screens/ThirdPage";
import FourthPage from "./screens/FourthPage";
import FivePage from "./screens/FivePage";
import GameInfoPage from './screens/GameInfoPage';
import Search from './screens/Search';
import ProfilPage from './screens/ProfilPage';
import RulesPage from './screens/RulesPages';

// Les differents screens
function StartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to the Formum"
        onPress={() => navigation.navigate("Gender")}
      />
    </View>
  );
}

function GenderScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FirstPage />
    </View>
  );
}

function AgeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SecondePage />
    </View>
  );
}

function GenresScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ThirdPage />
    </View>
  );
}

function HowLongScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FourthPage />
    </View>
  );
}

function LevelScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FivePage />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={FirstPage} />
          <Stack.Screen name="Gender" component={GenderScreen} />
          <Stack.Screen name="Age Verification" component={AgeScreen} />
          <Stack.Screen name="Genres" component={GenresScreen} />
          <Stack.Screen name="HowLong" component={HowLongScreen} />
          <Stack.Screen name="Level" component={LevelScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GameInfo" component={GameInfoPage} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="ProfilPage" component={ProfilPage} />
          <Stack.Screen name="RulesPage" component={RulesPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}


