import { View } from 'react-native';
import { TimerProvider } from './context/TimerContext';
import Controls from './components/Controls';
import InputTime from './components/InputTime';
import TimerDisplay from './components/TimerDisplay';

export default function App() {
  return (
    <TimerProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TimerDisplay />
        <Controls />
        <InputTime />
      </View>
    </TimerProvider>
  )  
}