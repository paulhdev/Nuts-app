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

export const Header = styled.View`
  width: 100%;
  padding: 30px 15px;
  align-items: center;
  background: ${theme.colors.primary};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const RowArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: LogoNuts
})`
  width: 80px;
  height: 50px;
`;

export const LogoutBtn = styled.View`
  border-width: 2px;
  border-color: ${theme.colors.secundary};
  padding: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 45%;
`;

export const TextBtn = styled.Text`
  color: ${theme.colors.secundary};
  font-weight: bold;
  font-size: 16px;
`;

export const TextNuts = styled.Text`
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: 20px;
  align-self: center;
  text-align: center;
  margin: 15px 0 5px 0;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const ReceiptText = styled.Text`
color: ${theme.colors.primary};
font-weight: bold;
font-size: 18px;
align-self: center;
text-align: center;
margin-bottom: 15px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentLine = styled.View`
  margin: 30px 60px 5px 60px;
`;

export const TitleContent = styled.Text`
color: ${theme.colors.dark};
font-weight: bold;
font-size: 14px;
`;

export const DescriptionContent = styled.Text`
color: ${theme.colors.primary};
font-size: 20px;
`;

export const ContentLogo = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 30px 0 15px 0;

  width: 100px;
  height: 100px;
  background-color: ${theme.colors.primary};
  border-radius: 50px;
`;

export const ShareBtn = styled.View`
  height: 40px;
  width: 300px;
  align-items: center;
  justify-content: center;

  margin: 60px 0 40px 0;
  background-color: ${theme.colors.primary};
  border-radius: 30;
`;

export const ShareText = styled.Text`
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: 16px;
`;