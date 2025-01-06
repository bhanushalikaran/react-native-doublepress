import { Text, View } from 'react-native';
import DoublePress from 'react-native-doublepress';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DoublePress
        onPress={() => console.log('Single press')}
        onDoublePress={() => console.log('Double press')}
        onLongPress={() => console.log('Long press')}
        bounceEffectIn={0.9}
        bounceEffectOut={1}
        bounceVelocityIn={0.2}
        bounceVelocityOut={0.5}
        bouncinessIn={5}
        bouncinessOut={10}
        style={{ backgroundColor: 'lightblue', padding: 10, borderRadius: 5 }}
      >
        <Text>Press Me</Text>
      </DoublePress>
    </View>
  );
}
