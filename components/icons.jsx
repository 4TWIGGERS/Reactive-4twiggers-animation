import * as React from 'react';
import Svg, { G, Path, Circle, Defs, Stop, ClipPath, LinearGradient } from 'react-native-svg';

const CloseIcon = (props) => (
 <Svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 320 512'
  fill='#fff'
  style={{ width: 20, height: 20 }}
  {...props}>
  <Path
   fill='#fff'
   d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256l105.3-105.4z'
  />
 </Svg>
);

const ArrowDown = (props) => (
 <Svg width={12} height={7} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
  <Path
   d='M10.667 1 6 5.667 1.333 1'
   stroke='#86ACA0'
   strokeWidth={2}
   strokeLinecap='round'
   strokeLinejoin='round'
  />
 </Svg>
);

const LogoSvg = (props) => (
 <Svg width={108} height={108} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
  <Circle cx={54} cy={54} r={53} fill='#192126' stroke='url(#a)' strokeWidth={2} />
  <G clipPath='url(#b)' fill='#fff'>
   <Path d='M35.25 38.696c0 5.735 4.477 10.384 10 10.384V38.696c0-5.736-4.477-10.385-10-10.385v10.385ZM50.25 28.311c5.523 0 10 4.65 10 10.385v41.538c-5.523 0-10-4.65-10-10.385V28.311Z' />
   <Path d='M72.75 62.06c0-5.734-4.477-10.384-10-10.384h-25c0 5.735 4.477 10.385 10 10.385h25Z' />
  </G>
  <Defs>
   <LinearGradient id='a' x1={31} y1={-47.5} x2={156} y2={205.5} gradientUnits='userSpaceOnUse'>
    <Stop offset={0.024} stopColor='#7786D4' />
    <Stop offset={1} stopColor='#6BE784' />
   </LinearGradient>
   <ClipPath id='b'>
    <Path fill='#fff' transform='translate(35.25 28.311)' d='M0 0h37.5v51.923H0z' />
   </ClipPath>
  </Defs>
 </Svg>
);

export { ArrowDown, LogoSvg, CloseIcon };
