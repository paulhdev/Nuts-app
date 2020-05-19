import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
  padding: 0 15px;
  height: 60px;
  background: ${theme.colors.gray};
  border-radius: 10px;
  border-width: 2px;
  border-color: transparent;

  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.dark,
})`
  flex: 1;
  font-size: 20px;
  color: ${theme.colors.dark};
`;
