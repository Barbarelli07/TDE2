import { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";

export default function Index() {

  const [valorReal, setValorReal] = useState<string>('1')
  const [cotacao, setCotacao] = useState<string>('1')

  function getDolarValue(){
    return String(Number(valorReal) * Number(cotacao))
  }

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.json')
    .then(res => res.json())
    .then(data => setCotacao(data.brl.usd))
  }, [])

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16
      }}
    >
      <Text
        style={{ fontSize: 20 }}
      >
        Converta REAL (BRL) em DOLAR (USD)</Text>

      <Text
        style={{ marginTop: 24, fontSize: 20 }}
      >
        Real (BRL)
      </Text>
      <TextInput
        style={{ backgroundColor: 'white', width: '100%', height: 40, marginTop: 8 }}
        value={valorReal}
        onChangeText={setValorReal}
        keyboardType="numeric"
      />

      <Text
        style={{ marginTop: 24, fontSize: 20 }}
      >
        Dolar (USD)
      </Text>
      <TextInput
        style={{ backgroundColor: 'white', width: '100%', height: 40, marginTop: 24 }}
        value={getDolarValue()}
      />
    </View>
  );
}
