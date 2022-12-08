import styled from 'styled-components/native';

import { Image } from 'react-native';

export const Form = styled.View`
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;


export const Icon = styled(Image)`
  width: 180px;
  height: 180px;
  margin-left: 40px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  font-size: 35px;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;