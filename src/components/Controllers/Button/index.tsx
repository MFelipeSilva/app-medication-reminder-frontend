import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, LabelButton } from "./styles";


type Props = RectButtonProps & {
  label: string;
}

export function Button({label}: Props) {
  return (
    <Container>
      <LabelButton>{label}</LabelButton>
    </Container>
  )
}