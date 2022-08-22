import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from '../../styles/globalStyle';
export const GetStarted = () => {
  //   useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.containerWhite}>
      <View>
        <Text> Welcome!</Text>
      </View>
    </SafeAreaView>
  );
};
