import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  ImageBackground,
} from 'react-native';

const TimerCard = (props) => {
  const {name, timer} = props;
  const [timerToDisplay, setTimerToDisplay] = useState('');

  // Get current time in milliseconds (minus 1hr for correct time for some dumb reason)
  const time = new Date().getTime() - (60 * 60000);


  const handleSetTimer = (timer) => {
    var countDown = timer * 60000;
    var taskCompletedAt = new Date(time + countDown)

    setTimerToDisplay(taskCompletedAt.toLocaleTimeString())

    // This is for the notication push
    // Should clear the timer after this too maybe?
    setTimeout(() => {
      
    }, 5000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text>{name}</Text>
        {name === 'Herb' ?
          <Image
            style={styles.img}
            source={require('../img/ranarr-weed.png')}
          />
        :
          <Image
            style={styles.img}
            source={require('../img/redwood-bird-house.png')}
          />
        }
      </View>
      <View style={styles.middleContainer}>
      <Button
        title='Set'
        onPress={() => handleSetTimer(timer)}
      />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.timerText}>{timerToDisplay}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black', // iOS
    shadowOffset: {width: 0, height: 2}, // iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.26, // iOS
    elevation: 10, // Android
    backgroundColor: 'white',
    padding: 10, // originally 20
    borderRadius: 10,

    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    // borderWidth: 1,
    justifyContent: 'center'
  },
  middleContainer: {
    // borderWidth: 1,
    justifyContent: 'center',
    width: '30%'
  },
  rightContainer: {
    // borderWidth: 1,
    justifyContent: 'center'
  },
  img: {
    width: 50,
    height: 50,
  },
  timerText: {
    fontSize: 25,
  }
});

export default TimerCard;
