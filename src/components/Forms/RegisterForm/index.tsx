import { Container, Title } from './styles';

import { Input } from '@components/Controllers/Input';
import { Button } from '@components/Controllers/Button';
import { Text } from 'react-native';
import { DateField } from '@components/Controllers/Date';

export function RegisterForm() {
  return (
      <Container>
        
        <Title>
          Sign Up
        </Title>

        <Input placeholder='Full name'/>
        <Input placeholder='E-mail'/>
        <Input placeholder='Password'/>

        <DateField />

        <Button label='Continue' />

      </Container>
    )
}