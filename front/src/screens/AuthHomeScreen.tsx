import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function AuthHomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}
