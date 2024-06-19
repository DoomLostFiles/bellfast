import {StyleSheet, Text, View,Image, useWindowDimensions} from 'react-native';
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

const RenderItem = ({index, x, item}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{translateY: translateYAnimation}],
    };
  });

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
              backgroundColor: 'white',marginBottom:20
            },
            circleAnimation,
          ]}
        />
      </View>
      <Animated.View style={lottieAnimationStyle}>
        
      <Image
        source={item?.image} style={{
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH * 1,
          }}
      />
   
      </Animated.View>
      <Text style={[styles.itemText, {color: item.textColor}]}>
        {item.text}
      </Text>
      <Text style={styles.subtitle}>{item?.excerpt}</Text>
    </View>
    
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
   position:'relative',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 120,
  }, subtitle: {
    color: '#535763',
    fontSize: 13,
    marginTop: 0,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 0,
    marginHorizontal: 10,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});