import { View } from 'react-native';
import { useTheme } from 'styled-components';
import BackWardButton from './components/BackWardButton';
import Button from './components/Button';
import Dots from './components/Dots';
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
      <BackWardButton />
      <Separetor height={20} />
      <Text>Marcos</Text>
      <Separetor height={20} />
      <Button title="Assine agora" textType="bold" />
      <Separetor height={20} />
      <Dots amount={6} />
    </View>
  );
};

export default App;
