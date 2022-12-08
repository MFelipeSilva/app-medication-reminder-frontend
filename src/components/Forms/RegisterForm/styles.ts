import styled from "styled-components/native";


export const Container = styled.View`
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  font-size: 35px;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.FONTS.TITLE}
`