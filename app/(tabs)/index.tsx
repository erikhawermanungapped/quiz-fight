import { View, Text, TouchableOpacity } from "react-native";
import "nativewind"; // NativeWind-importen
import { t } from "i18next";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center text-yellow-500 bg-gray-100">
      <Text className="text-4xl text-blue-500 font-bold">
        {t("QuizFight!")}
      </Text>

      <TouchableOpacity className="mt-4 bg-teal-500 px-4 py-2 rounded-lg">
        <Text className="text-white text-lg">{t("Skapa ett rum")}</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4 bg-yellow-500 px-4 py-2 rounded-lg">
        <Text className="text-white text-lg">{t("Anslut till rum")}</Text>
      </TouchableOpacity>
    </View>
  );
}
