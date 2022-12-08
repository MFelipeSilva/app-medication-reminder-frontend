import { Form, Icon, Title} from './styles';

import { Input } from '@components/Controllers/Input';
import { Button } from '@components/Controllers/Button';
import { TextForgot } from '@components/Controllers/TextForgot';


export function LoginForm() {
  return (
    <Form>
      <Icon source={require('../../../assets/reminder.png')}/>

      <Title>
        Login
      </Title>

      <Input placeholder="E-mail"/>
      <Input placeholder="Password"/>

      <TextForgot />

      <Button label="Login"></Button>
    </Form>
  )
}

