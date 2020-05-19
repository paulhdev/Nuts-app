import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import api from '../../services/api';
import axios from 'axios';

import {
  ScrollView,
  Header,
  Container,
  RowArea,
  Logo,
  LogoutBtn,
  TextBtn,
  TextNuts,
  JoinButtonChange,
  ButtonChange,
  TextButtonChange
} from './styles';

import Exchange from './Exchange';
import Travel from './Travel';

export default function Home({navigation, route}) {

  const { username } = route.params;

  const [selectedService, setSelectedService] = useState("EXCHANGE");

  function handleLogout() {
    navigation.navigate("Home");
  }

  function handleService(service) {
    setSelectedService(service);
  }

  async function getData() {
    try {
      const response = await api.get("/date");
      console.log(response);
    } catch (error) {
      console.log(error, ' ERROR')
    }
  }

  useEffect(() => {
    // getData();
  }, [])

  return (
    <ScrollView>
      <Container>
        <Header>
          <RowArea>
            <Logo />
            <TouchableWithoutFeedback onPress={handleLogout}>
              <LogoutBtn>
                <TextBtn>NUT$ | Sair</TextBtn>
              </LogoutBtn>
            </TouchableWithoutFeedback>
          </RowArea>
          <TextNuts>
            Olá, {username}! Confira o que {'\n'}
            a NUT$ tem para você.
          </TextNuts>
        </Header>
        <JoinButtonChange>
            <TouchableWithoutFeedback onPress={() => handleService("EXCHANGE")}>
              <ButtonChange 
              isActive={selectedService === "EXCHANGE" ? true : false} 
              ButtonLeft>
                <TextButtonChange 
                isActive={selectedService === "EXCHANGE" ? true : false}>
                  Câmbio
                </TextButtonChange>
              </ButtonChange>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleService("TRAVEL")}>
              <ButtonChange 
              isActive={selectedService === "TRAVEL" ? true : false}
              ButtonRight>
                <TextButtonChange 
                isActive={selectedService === "TRAVEL" ? true : false}>
                  Viagem
                </TextButtonChange>
              </ButtonChange>
            </TouchableWithoutFeedback>
          </JoinButtonChange>
          {
            selectedService === "EXCHANGE" ? <Exchange name={username} /> : <Travel name={username} />
          }
      </Container>
    </ScrollView>
  );
}
