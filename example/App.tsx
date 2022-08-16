import RnDatePicker, {
  ChangeDayObject,
} from '@cocho/react-native-daterange-picker';
import {Moment} from 'moment';
import React, {useState} from 'react';
import {Button, View} from 'react-native';

const App = () => {
  const [open, setOpen] = useState(false);
  const [selecteDate, setSelectDate] = useState<[Moment, Moment]>([null, null]);

  const handleChanageDate = ({startDate, endDate}: ChangeDayObject) => {
    if (startDate) {
      setSelectDate([startDate, selecteDate[1]]);
    }

    if (endDate) {
      setSelectDate([selecteDate[0], endDate]);
    }
  };

  return (
    <View>
      <Button title="Click" onPress={() => setOpen(true)} />
      <RnDatePicker
        onChange={handleChanageDate}
        date={selecteDate}
        open={open}
        onClose={() => setOpen(false)}
      />
    </View>
  );
};

export default App;
