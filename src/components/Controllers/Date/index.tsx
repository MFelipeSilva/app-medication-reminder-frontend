import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import{ View, Button, Text } from 'react-native'


export function DateField() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View>
      <Button onPress={showDatepicker} title="Birth date" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  )
}