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

import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default function Travel({ name }) {

  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState("2020/04/06");
  const [selectedDestiny, setSelectedDestiny] = useState("Credit");
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const dates = ["2020/10/06", "2020/15/06", "2020/20/06"];
  const destinations = ["SP", "RJ", "AM"];

  function handleConfirm() {
    if(!inputValue) {
      setInputError(true);
      return false;
    }

    const data = {
      username: name,
      type: 'Viagem',
      selectedDate,
      selectedDestiny,
      inputValue
    }

    navigation.navigate('Receipt', {
      data
    })
  }

  return (
    <Container>
      <TextPicker>Selecione a data:</TextPicker>
      <Picker
        style={styles.PickerStyle}
        selectedValue={selectedDate}
        onValueChange={(itemValue, itemIndex) => setSelectedDate(itemValue)}
      >
        {
          dates.map((currency, index) => (
            <Picker.Item key={index} label={currency} value={currency} />
          ))
        }
      </Picker>
      <TextPicker>Escolha o destino:</TextPicker>
      <Picker
        style={styles.PickerStyle}
        selectedValue={selectedDestiny}
        onValueChange={(itemValue, itemIndex) => setSelectedDestiny(itemValue)}
      >
        {
          destinations.map((receiveType, index) => (
            <Picker.Item key={index} label={receiveType} value={receiveType} />
          ))
        }
      </Picker>
      <TextPicker>De onde vai embarcar?</TextPicker>
      <Input
      style={{ paddingLeft: 5 }}
      placeholder="Local de embarque"
      value={inputValue}
      onChangeText={text => setInputValue(text)}
      />
      {
        inputError && inputValue === 0 &&
        <MessageError>Por favor, informe de onde vai embarcar!</MessageError>
      }
      {
        inputValue.length > 0 &&
        <>
          <InfoArea>
            <TextType>informações da viagem</TextType>
            <TextValueCurrent>
              De {inputValue} para São Paulo
            </TextValueCurrent>
            <InfoRow>
              <MoneyArea>
                <CurrencyType>Data selecionada:</CurrencyType>
                <CurrencyValue>{selectedDate}</CurrencyValue>
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