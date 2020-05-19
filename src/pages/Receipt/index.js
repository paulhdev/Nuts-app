import React, { useState, createRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import {
  ScrollView,
  Header,
  Container,
  RowArea,
  Logo,
  LogoutBtn,
  TextBtn,
  TextNuts,
  Content,
  ReceiptText,
  ContentRow,
  ContentLine,
  TitleContent,
  DescriptionContent,
  ContentLogo,
  ShareBtn,
  ShareText
} from './styles';

export default function Receipt({navigation, route}) {

  const { data } = route.params;

  const viewShotRef = createRef();

  console.log(data);

  function handleBack() {
    navigation.goBack();
  }

  function handleShare() {
    viewShotRef.current.capture().then(uri => {
      Share.open({
      title: 'Compartilhar via NUT$',
      subject: 'Comprovante NUT$',
      message: "",
      url: uri,
      })
    })
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <RowArea>
            <Logo />
            <TouchableWithoutFeedback onPress={handleBack}>
              <LogoutBtn>
                <TextBtn>NUT$ | Voltar</TextBtn>
              </LogoutBtn>
            </TouchableWithoutFeedback>
          </RowArea>
          <TextNuts>
            Olá, {data.username}! Confira o seu {'\n'}
            comprovante NUT$.
          </TextNuts>
        </Header>
        <ViewShot style={{ backgroundColor: '#fff' }} 
        ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }} >
          <Content>
            <ReceiptText>Comprovante NUT$</ReceiptText>
            <ContentRow>
              <ContentLine>
                <TitleContent>Nome:</TitleContent>
                <DescriptionContent>
                  {data.username}
                </DescriptionContent>
              </ContentLine>
              <ContentLine>
                <TitleContent>Tipo:</TitleContent>
                <DescriptionContent>
                  {data.type}
                </DescriptionContent>
              </ContentLine>
            </ContentRow>
            <ContentLogo>
              <Logo />
            </ContentLogo>
            <ContentRow>
              <ContentLine>
                <TitleContent>De {data.type === "Câmbio" && "R$"}:</TitleContent>
                <DescriptionContent>
                  {data.type === "Câmbio" ? data.valueExchange : data.inputValue}
                </DescriptionContent>
              </ContentLine>
              <ContentLine style={{ marginLeft: -20, marginRight: -20 }}>
                <TitleContent>
                  {data.type === "Câmbio" ? 'Receber em:' : 'Data'}
                </TitleContent>
                <DescriptionContent>
                  {data.type === "Câmbio" ? data.selectedReceive : data.selectedDate}
                </DescriptionContent>
              </ContentLine>
              <ContentLine>
                <TitleContent>Para {data.type === "Câmbio" && data.selectedCurrency}:</TitleContent>
                <DescriptionContent>
                  {data.type === "Câmbio" ? data.valueTotal : data.selectedDestiny}
                </DescriptionContent>
              </ContentLine>
            </ContentRow>
          </Content>
          <ReceiptText style={{ marginBottom: -15 }}>
            Obrigado por usar os nossos {'\n'} serviços, a NUT$ agradesce!
          </ReceiptText>
        </ViewShot>
        <TouchableWithoutFeedback onPress={handleShare}>
          <ShareBtn>
            <ShareText>Compartilhar</ShareText>
          </ShareBtn>
        </TouchableWithoutFeedback>
      </Container>
    </ScrollView>
  );
}
