import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useRecordButton = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const scaleAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    );

    const opacityAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.5,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    );

    scaleAnimation.start();
    opacityAnimation.start();
  }, [scaleAnim, opacityAnim]);

  return { scaleAnim, opacityAnim };
};

export default useRecordButton;