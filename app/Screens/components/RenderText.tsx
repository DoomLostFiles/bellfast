import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {OnboardingData} from './data';

type Props = {
  index: number;
  x: SharedValue<number>;
  item: OnboardingData;
};

const RenderText= ({index, x, item}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();



  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{scale: scale}],
    };
  });

  return (
    <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
              backgroundColor: 'white',
            },
            circleAnimation,
          ]}
        />
      </View>
      
      <Text style={[styles.itemText, {color: item.textColor}]}>
        {item.text}
      </Text>
      <Text style={styles.subtitle}>{item?.excerpt}</Text>
    </View>
  );
};

export default RenderText;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 34,
    fontFamily:'inter',
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 20,
    color:'#3A3A3A'
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  subtitle: {
    color: '#535763',
    fontSize: 13,
    marginTop: 0,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
});