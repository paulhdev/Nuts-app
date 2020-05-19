import React from 'react';
import {ActivityIndicator} from 'react-native';

import theme from '../../global/theme';
import {Container, Text} from './styles';

export default function Button({children, loading, textColor, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <Text style={{ color: !textColor ? theme.colors.white : textColor }}>{children}</Text>
      )}
    </Container>
  );
}
