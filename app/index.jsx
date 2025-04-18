import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Index() {
  const [data, setData] = React.useState(null);

  const getData = async () => {
    try {
      const hasil = await fetch("https://silat.barengsaya.com/api/karyawan/2");
      const json = await hasil.json();
      setData(json.data);
      console.log(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}> {data ? data.name : ""}</Text>
    </View>
  );
}
