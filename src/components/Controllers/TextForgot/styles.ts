import styled from "styled-components/native";


export const TextContainer = styled.Text`
  font-size: 14px;
  margin-left: 155px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TERTIARY};
`