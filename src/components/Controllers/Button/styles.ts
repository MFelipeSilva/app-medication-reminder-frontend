import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 55px;
  margin-top: 40px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.QUATERNARY};
`;

export const LabelButton = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.PRIMARY}
  `;