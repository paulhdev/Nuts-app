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

export const JoinButtonChange = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 30px 0;
`;

export const ButtonChange = styled.View`
  background: ${
    props => props.isActive === true ? theme.colors.primary : theme.colors.secundary
  };
  
  padding: 10px 40px;
  
  border-top-left-radius: ${
    props => props.ButtonLeft ? '30px' : '0px'
  };
  border-bottom-left-radius: ${
    props => props.ButtonLeft ? '30px' : '0px'
  };
  
  border-top-right-radius: ${
    props => props.ButtonRight ? '30px' : '0px'
  };
  border-bottom-right-radius: ${
    props => props.ButtonRight ? '30px' : '0px'
  };
`;

export const TextButtonChange = styled.Text`
  color: ${
    props => props.isActive === true ? theme.colors.white : theme.colors.primary
  };
  font-size: 16px;
  font-weight: bold;
`;

export const MessageError = styled.Text`
  color: ${theme.colors.error};
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
  margin-top: -25px;
  margin-bottom: 30px;
`;