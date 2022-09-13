import { View } from 'react-native';
import { useTheme } from 'styled-components';
import Button from './components/Button';
import Separetor from './components/Separator';
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
      <Separetor height={20} />
      <Button title="Assine agora" textType="bold" />
    </View>
  );
};

export default App;
