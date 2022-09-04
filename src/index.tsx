import { View } from 'react-native';
import { useTheme } from 'styled-components';
import Text from './components/Text';

const App = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background.main,
      }}
    >
      <Text>Marcos</Text>
    </View>
  );
};

export default App;
