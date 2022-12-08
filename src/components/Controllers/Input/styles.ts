import styled from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";

export const Container = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.TERTIARY
}))<TextInputProps>`
  width: 100%;
  height: 48px;
  padding-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: rgba(255,255,255, 0.9);
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
`