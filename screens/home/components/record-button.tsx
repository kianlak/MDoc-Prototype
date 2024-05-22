import React from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';

import useRecordButton from '../hooks/useRecordButton';
import { styles } from '../styles/record-button-styles';

const RecordButton = () => {
  const { scaleAnim, opacityAnim } = useRecordButton();
  
  const handlePress = () => {
    console.log('hi');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Animated.View
          style={[
            styles.button,
            {
              transform: [{ scale: scaleAnim }],
              opacity: opacityAnim,
            },
          ]}
        >
          <Text style={styles.buttonText}>Start Recording</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default RecordButton;