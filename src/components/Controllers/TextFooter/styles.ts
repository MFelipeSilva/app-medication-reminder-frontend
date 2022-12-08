import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CustomText = styled.Text`
  padding-right: 5px;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

export const CustomLink = styled.Text`
  color: ${({ theme }) => theme.COLORS.QUATERNARY};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

