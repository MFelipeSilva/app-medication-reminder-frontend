import { Container } from './styles'
import { RegisterForm } from '@components/Forms/RegisterForm';

export function Register() {
  return (
    <Container source={require('../../assets/background.jpeg')}>
      <RegisterForm />
    </Container>
  )
}