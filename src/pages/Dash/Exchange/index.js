import React, { useState } from 'react';
import { Picker, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import theme from '../../../global/theme';

import {
  Container,
  TextPicker,
  ContainerInput,
  InputMasked,
  MessageError,
  InfoArea,
  TextType,
  TextValueCurrent,
  InfoRow,
  MoneyArea,
  CurrencyType,
  CurrencyValue
} from './styles';

import Button from '../../../components/Button';

export default function Exchange({ name }) {

  const navigation = useNavigation();

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedReceive, setSelectedReceive] = useState("Credit");
  const [inputValue, setInputValue] = useState(0);
  const [inputError, setInputError] = useState(false);

  const valueEUR = 5.85;
  const valueUSD = 5.39;

  const currencys = ["USD", "EUR"];
  const receiveTypes = ["Credit", "Card"];

  function handleConfirm() {
    if(!inputValue) {
      setInputError(true);
      return false;
    }

    const data = {
      username: name,
      type: 'Câmbio',
      selectedCurrency,
      selectedReceive,
      valueExchange: transformNumber(inputValue),
      valueTotal: exchangeCurrency(inputValue),
      valueCurrency: selectedCurrency === 'USD' ? valueUSD : valueEUR
    };

    navigation.navigate('Receipt', { data });
  }

  function transformNumber(number) {
    const numberValue = number.substring(2);
    return parseFloat(numberValue).toFixed(2).replace('.', ',');
  }

  function exchangeCurrency(number) {
    const numberValue = number.substring(2);
    const exchangeValue = selectedCurrency === 'USD' ? parseFloat(numberValue) / valueUSD 
    : parseFloat(numberValue) / valueEUR;

    const formatValue = exchangeValue.toFixed(2).replace('.', ',');
    
    return formatValue;
    
  }

  return (
    <Container>
      <TextPicker>Selecione a moeda:</TextPicker>
      <Picker
        style={styles.PickerStyle}
        selectedValue={selectedCurrency}
        onValueChange={(itemValue, itemIndex) => setSelectedCurrency(itemValue)}
      >
        {
          currencys.map((currency, index) => (
            <Picker.Item key={index} label={currency} value={currency} />
          ))
        }
      </Picker>
      <TextPicker>Como deseja receber?</TextPicker>
      <Picker
        style={styles.PickerStyle}
        selectedValue={selectedReceive}
        onValueChange={(itemValue, itemIndex) => setSelectedReceive(itemValue)}
      >
        {
          receiveTypes.map((receiveType, index) => (
            <Picker.Item key={index} label={receiveType} value={receiveType} />
          ))
        }
      </Picker>
      <TextPicker>Quanto deseja trocar?</TextPicker>
      <ContainerInput>
        <InputMasked
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: '',
        }}
        placeholder="R$ 0,00"
        value={inputValue}
        onChangeText={text => setInputValue(text)}
        />
      </ContainerInput>
      {
        inputError && inputValue === 0 &&
        <MessageError>Por favor, informe quando deseja trocar!</MessageError>
      }
      {
        inputValue !== 0 &&
        <>
          <InfoArea>
            <TextType>informações do câmbio</TextType>
            <TextValueCurrent>
              Valor atual: {selectedCurrency} {selectedCurrency === 'USD' ? valueUSD : valueEUR}
            </TextValueCurrent>
            <InfoRow>
              <MoneyArea>
                <CurrencyType>R$</CurrencyType>
                <CurrencyValue>
                  {transformNumber(inputValue)}
                </CurrencyValue>
              </MoneyArea>
              <MoneyArea>
                <CurrencyType>{selectedCurrency}</CurrencyType>
                <CurrencyValue>
                  {exchangeCurrency(inputValue)}
                </CurrencyValue>
              </MoneyArea>
            </InfoRow>
          </InfoArea>
          <TouchableWithoutFeedback style={{ width: 320 }} onPress={handleConfirm}>
            <Button>Confirmar</Button>
          </TouchableWithoutFeedback>
        </>
      }
    </Container>
  );
}

const styles = StyleSheet.create({
  PickerStyle: {
    color: theme.colors.dark,
    width: 320, 
    height: 60,
    backgroundColor: theme.colors.gray,
    borderRadius: 10,
    marginBottom: 10,
  }
})