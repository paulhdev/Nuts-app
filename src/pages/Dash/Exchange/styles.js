import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import theme from '../../../global/theme';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  max-width: 80%;
  padding-bottom: 60px;
`;

export const TextPicker = styled.Text`
  color: ${theme.colors.dark};
  font-size: 16px;
  margin: 10px 0;
  align-self: flex-start;
`;

export const ContainerInput = styled.View`
  padding: 0 5px;
  height: 60px;
  background: ${theme.colors.gray};
  border-radius: 10px;
  border-width: 2px;
  border-color: transparent;

  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const InputMasked = styled(TextInputMask).attrs({
  placeholderTextColor: theme.colors.dark,
})`
  flex: 1;
  font-size: 20px;
  color: ${theme.colors.dark};
`;

export const InfoArea = styled.View``;

export const TextType = styled.Text`
  color: ${theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
`;

export const TextValueCurrent = styled.Text`
  color: ${theme.colors.dark};
  font-size: 14px;
  text-align: center;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MoneyArea = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin: 5px 10px 30px 10px;
`;

export const CurrencyType = styled.Text`
  color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
`;

export const CurrencyValue = styled.Text`
  color: ${theme.colors.dark};
  font-size: 20px;
`;

export const MessageError = styled.Text`
  color: ${theme.colors.error};
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
  margin-top: -25px;
  margin-bottom: 30px;
`;