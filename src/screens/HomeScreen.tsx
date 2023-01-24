import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import TimerCard from '../components/TimerCard';

const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>      
      <Button
        title='New Timer'
        onPress={() => navigation.navigate('NewTimerScreen', {name: 'Jane'})}
      />
      <TimerCard
        name='Bird House'
        timer={50}
      />
      <TimerCard
        name='Herb'
        timer={80}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  }
});

export default HomeScreen;