import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, View, Text, TextInput, SafeAreaView } from 'react-native';

const Page = styled.SafeAreaView`
  flex: 1;
  margin-top: 25px;
  align-items: center;
`;
const HeaderText = styled.Text`
  font-size: 25px;
`;
const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 30px;
`;
const CalcButton = styled.Button`
  margin-top: 10px;
`;
const ResultArea = styled.View`
  width: 90%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;
const PctArea = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;
const PctItem = styled.Button`
  margin-left: 20px;
`;

export default function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);
  const calc = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setTip((pct / 100) * nBill);
    }
  };
  useEffect(() => {
    calc();
  }, [pct]);
  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Total da Conta?"
        placeholderTextColor="#c0c0c9"
        keyboardType="numeric"
        onChangeText={(n) => setBill(n)}
        value={bill}
      />
      <PctArea>
        <PctItem title="5%" onPress={() => setPct(5)} />
        <PctItem title="10%" onPress={() => setPct(10)} />
        <PctItem title="15%" onPress={() => setPct(15)} />
        <PctItem title="20%" onPress={() => setPct(20)} />
      </PctArea>
      <CalcButton title={`Calular ${pct}%`} onPress={calc} />
      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>
          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R$ {tip.toFixed(2)}({pct}%)
          </ResultItem>
          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      )}
    </Page>
  );
}
