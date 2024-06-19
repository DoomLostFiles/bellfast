import {StyleSheet, View, FlatList, ViewToken,Dimensions} from 'react-native';
import {

  Text,
 
  TouchableOpacity,
 
} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,  SharedValue,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import data, {OnboardingData} from './components/data'
import Pagination from './components/Pagination';
import CustomButton from './components/CustomButon';
import RenderItem from './components/RenderItem';
import RenderText from './components/RenderText';
const OnboardingScreen = () => {
  const flatListRef = useAnimatedRef<FlatList<OnboardingData>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const ref = useAnimatedRef<FlatList<OnboardingData>>();;
  type Props = {
    datas: OnboardingData[];
    no: SharedValue<number>;
    index: number;
  };
  const navigation = useNavigation();
  const butonSkip= () => {
    return (
      <View
        style={{
          height: height * 0.15,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
   

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == data.length - 1 ? (
            <View style={{height: 50}}>
             
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: 'white',
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color:'black',
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
           
            </View>
          )}
        </View>
      </View>
    );
  };
  const Footer = ({index, no, datas}: Props) => {
    
    return (
      <View
        style={{
        top:0,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
   

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == data.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('HomeScreen')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: 'white',
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black',
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color:'black',
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0].index !== null) {
      flatListIndex.value = viewableItems[0].index;
    }
  };
  const {width, height} = Dimensions.get('window');
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState<number>(0);
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != data.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = data.length - 1;
    const offset = lastSlideIndex * width;
    flatListRef?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };
  return (
    <View style={styles.container}>
       <View style={styles.topContainer}>
       
        <CustomButton
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={data.length}
          x={x}
        />
      </View>
 
      <Animated.FlatList style={{position:'absolute',top:60, backgroundColor:'white'}}
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} x={x} />;
        }}
        keyExtractor={item => item.id.toString()}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <View style={styles.center}>
        <Pagination data={data} x={x} />
       
      </View>
      <View style={styles.bottomContainer}>
      
        <Footer />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingVertical: 30,
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
  center:{
    alignItems:'center',top:100
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 0,
    paddingVertical: 0,
    position: 'relative',
    backgroundColor:'white',
  top: -10,

  },
});