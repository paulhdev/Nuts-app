import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {ScrollView, BackgorundPrimary, Container, Logo, Box, TextNuts, MessageError} from './styles';

import theme from '../../global/theme';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Home({navigation}) {

  const [ name, setName ] = useState("");
  const [ errorName, setErrorName ] = useState(false);

  const handleAccess = () => {
    if(!name) {
      setErrorName(true);
      return false;
    }

    navigation.navigate("Dash", {
      username: name
    });
  }

  function handleAbout() {
    alert(`
      Nos conheça um pouco mais, acesse: ${'\n'}
      https://www.cambionuts.com.br
    `);
  }

  return (
    <>
      <ScrollView>
        <BackgorundPrimary>
          <Logo />
        </BackgorundPrimary>
        <Container>
          <Box>
            <TextNuts>
              Olá, seja bem-vindo! {'\n'}
              Como podemos te chamar?
            </TextNuts>
            <Input
              placeholder="Informe seu nome"
              value={name}
              onChangeText={text => setName(text)}
            />
            {
              errorName === true && name === "" &&
              <MessageError>Por favor, informe seu nome!</MessageError>
            }
            <TouchableWithoutFeedback onPress={handleAccess}>
              <Button>Entrar</Button>
            </TouchableWithoutFeedback>
          </Box>
          <TouchableWithoutFeedback style={{ width: 320 }} onPress={handleAbout}>
            <Button
            textColor={theme.colors.primary}
            style={{
              backgroundColor: theme.colors.secundary,
              marginTop: 20
            }}>
            Um pouco sobre a gente
            </Button>
          </TouchableWithoutFeedback>
        </Container>
      </ScrollView>
    </>
  );
}
