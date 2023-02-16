import {
 View,
 Text,
 Platform,
 StatusBar,
 StyleSheet,
 Dimensions,
 Pressable,
 SafeAreaView,
} from 'react-native';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
 withTiming,
 withSpring,
 interpolate,
 useSharedValue,
 useAnimatedStyle,
 runOnJS,
} from 'react-native-reanimated';

import { users } from './user';
import Circle from './components/Circle';
import { ArrowDown, CloseIcon } from './components/icons';
import CompanyCard from './components/CompanyCard';

const { width, height } = Dimensions.get('screen');

if (Platform.OS === 'android') {
 StatusBar.setTranslucent(true);
 StatusBar.setBackgroundColor('transparent');
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const RADIUS = 367;
const NUM_VIEWS = 9;
const VIEW_SIZE = 56;
const CENTER_POSITION = RADIUS * 2 - width;

const withTimingOpt = {
 duration: 1300,
};

const App = () => {
 const [fontsLoaded] = useFonts({
  MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
 });

 const rotate = useSharedValue(0);
 const scale = useSharedValue(0);
 const [open, setOpen] = useState(false);
 const [data, setData] = useState();

 useEffect(() => {
  let usersArray = users.map((user, i) => {
   const angle = (i / NUM_VIEWS) * 2 * Math.PI;
   const x = RADIUS + RADIUS * Math.cos(angle);
   const y = RADIUS + RADIUS * Math.sin(angle);

   return {
    ...user,
    index: i,
    left: x,
    top: y,
   };
  });

  setData(usersArray);
 }, []);

 const circleAnimatedStyle = useAnimatedStyle(() => {
  const bottomPosition = Platform.OS === 'web' ? height - 350 : height - 200;
  const widthPosition = Platform.OS === 'web' ? width + 100 : RADIUS * 2;
  const leftPosition = Platform.OS === 'web' ? -100 : -CENTER_POSITION / 2;
  const heightPosition = Platform.OS === 'web' ? height : RADIUS * 2 + 300;

  const topStyle = interpolate(scale.value, [0, 1], [bottomPosition, -80]);
  const bottomStyle = interpolate(scale.value, [0, 1], [0, 0]);
  const heightStyle = interpolate(scale.value, [0, 1], [RADIUS * 2, heightPosition]);
  const widthStyle = interpolate(scale.value, [0, 1], [RADIUS * 2, widthPosition]);

  const leftStyle = interpolate(scale.value, [0, 1], [-CENTER_POSITION / 2, leftPosition]);
  const radiusStyle = interpolate(scale.value, [0, 1], [RADIUS, 0]);

  return {
   transform: [
    {
     rotate: `${rotate.value}deg`,
    },
   ],
   width: widthStyle,
   height: heightStyle,
   bottom: bottomStyle,
   top: topStyle,
   left: leftStyle,
   borderRadius: radiusStyle,
  };
 });

 const closeIconAnimatedStyle = useAnimatedStyle(() => {
  const topStyle = interpolate(scale.value, [0, 1], [0, 1]);

  return {
   opacity: topStyle,
  };
 });

 const buttonAnimatedStyle = useAnimatedStyle(() => {
  let opacity = interpolate(scale.value, [0, 1], [1, 0]);

  return {
   opacity,
  };
 });

 const onGestureEvent = ({ nativeEvent }) => {
  if (!open) {
   const springOpt = {
    damping: 10,
    stiffness: 5,
   };

   const rotateValue = rotate.value + nativeEvent.translationX;

   rotate.value = withSpring(rotateValue, springOpt);
  }
 };

 const openModal = () => {
  if (open) {
   scale.value = withTiming(0, withTimingOpt);
  } else {
   scale.value = withTiming(1, withTimingOpt);
  }

  setOpen(!open);
 };

 const showUsersList = () => {
  'worklet';

  if (rotate.value !== 0) {
   const spOptions = {
    stiffness: 200,
    mass: 1,
    damping: 100,
   };

   rotate.value = withSpring(0, spOptions, () => {
    runOnJS(openModal)();
   });
  } else {
   openModal();
  }
 };

 const closeModal = () => {
  const withSpringOpt = {
   stiffness: 100,
   mass: 2,
   damping: 50,
  };

  rotate.value = withSpring(0, withSpringOpt);
  scale.value = withTiming(0, {
   duration: 500,
  });
  setOpen(false);
 };

 if (fontsLoaded) {
  return (
   <>
    <StatusBar barStyle='light-content' />
    <GestureHandlerRootView
     style={{
      flex: 1,
     }}>
     <SafeAreaView style={styles.SafeAreaViewStyle}>
      <AnimatedPressable onPress={closeModal} style={[styles.closeButton, closeIconAnimatedStyle]}>
       <CloseIcon />
      </AnimatedPressable>

      <View style={styles.container}>
       <Text style={styles.companyText}>Company Details</Text>
       <CompanyCard />

       <Text style={[styles.commonTextStyle]}>Members</Text>
       <Animated.View style={[styles.circle, circleAnimatedStyle]}>
        {data &&
         data.map((d, i) => (
          <Circle
           index={i}
           user={d}
           key={d.id}
           uri={d.uri}
           data={data}
           open={open}
           radius={RADIUS}
           rotate={rotate}
           top={d.top - VIEW_SIZE / 2}
           left={d.left - VIEW_SIZE / 2}
           onGestureEvent={onGestureEvent}
          />
         ))}
       </Animated.View>

       <AnimatedPressable style={[styles.arrowStyle, buttonAnimatedStyle]} onPress={showUsersList}>
        <Text style={styles.bottomText}>Full List</Text>
        <ArrowDown />
       </AnimatedPressable>
      </View>
     </SafeAreaView>
    </GestureHandlerRootView>
   </>
  );
 }

 return null;
};

export default App;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#0E1117',
 },
 SafeAreaViewStyle: {
  flex: 1,
  backgroundColor: '#0E1117',
 },
 companyText: {
  fontFamily: 'MontserratSemiBold',
  color: '#fff',
  fontSize: 16,
  letterSpacing: 1,
  width: width,
  marginTop: Platform.OS === 'android' ? 40 : 20,
  textAlign: 'center',
 },
 commonTextStyle: {
  fontFamily: 'MontserratSemiBold',
  color: '#fff',
  fontSize: 14,
  position: 'absolute',
  letterSpacing: 1,
  bottom: 220,
  left: 24,
 },
 bottomText: {
  width: width,
  fontFamily: 'MontserratSemiBold',
  color: '#fff',
  fontSize: 14,
  letterSpacing: 1,
  textAlign: 'center',
  marginBottom: 8,
 },
 arrowStyle: {
  bottom: 30,
  left: 0,
  position: 'absolute',
  alignItems: 'center',
 },
 circle: {
  botom: -100,
  position: 'absolute',
  backgroundColor: '#102123',
 },
 closeButton: {
  position: 'absolute',
  top: 50,
  right: 25,
  backgroundColor: '#212D30',
  width: 40,
  height: 40,
  borderRadius: 40,
  zIndex: 1000,
  justifyContent: 'center',
  alignItems: 'center',
 },
});
