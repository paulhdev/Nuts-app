import styled from 'styled-components';
import theme from '../../global/theme';

import LogoNuts from '../../assets/images/logo.png';

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
  background: ${theme.colors.white};
`;

export const Container = styled.View`
  align-items: center;
`;

export const BackgorundPrimary = styled.View`
  background: ${theme.colors.primary};
  width: 100%;
  height: 320px;
  align-items: center;
  padding-top: 15%;
`;

export const Logo = styled.Image.attrs({
  source: LogoNuts
})`
  width: 230px;
  height: 150px;
`;

export const Box = styled.View.attrs({
  shadowColor: theme.colors.dark,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  background: ${theme.colors.white};
  width: 320px;
  height: 320px;
  border-radius: 10px;
  padding: 15px;
  margin-top: -25%;
  margin-bottom: 10px;
`;

export const TextNuts = styled.Text`
  color: ${theme.colors.dark};
  font-size: 20px;
  align-self: center;
  text-align: center;
  margin: 30px 0;
`;

export const MessageError = styled.Text`
  color: ${theme.colors.error};
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
  margin-top: -25px;
  margin-bottom: 30px;
`;