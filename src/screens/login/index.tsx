import { Container, Footer } from './styles';

import { LoginForm } from '@components/Forms/LoginForm';
import { TextFooter } from '@components/Controllers/TextFooter';

export function Login() {
  return (
    <Container source={require('../../assets/background.jpeg')}>
      <LoginForm />

      <Footer>
        <TextFooter />
      </Footer>
      
    </Container>
  )
}