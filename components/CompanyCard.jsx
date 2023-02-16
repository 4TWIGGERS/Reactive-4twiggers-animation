import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');
import { LogoSvg } from './icons';

const CARD_WIDTH = width - 48;
const LOGO_HALF_WIDTH = 54;

const CompanyCard = () => {
 return (
  <>
   <LinearGradient
    colors={['#BB55F0', '#13CDA9']}
    start={{ x: -0.3, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.linearStyle}
   />

   <View style={styles.cardContainer}>
    <LogoSvg style={styles.logoStyle} />
    <Text style={styles.textStyle}>4Twiggers</Text>

    <View style={{ paddingHorizontal: 24 }}>
     <Text style={styles.commonTextStyle}>
      4Twiggers is a preeminent software development company headquartered in the bustling city of
      Tbilisi, Georgia.
     </Text>

     <Text style={styles.commonTextStyle}>
      Our team consists of experienced developers and designers who are dedicated to offering
      innovative, practical, and user-friendly mobile app, desktop app, and web portal development
      services to clients from abroad spectrum of industries.
     </Text>
    </View>
   </View>
  </>
 );
};

export default CompanyCard;

const styles = StyleSheet.create({
 cardContainer: {
  width: CARD_WIDTH,
  height: 310,
  backgroundColor: '#192126',
  borderBottomLeftRadius: 32,
  borderBottomRightRadius: 32,
 },
 linearStyle: {
  height: 76,
  marginTop: 45,
  width: CARD_WIDTH,
  borderTopRightRadius: 32,
  borderTopLeftRadius: 32,
 },
 commonTextStyle: {
  color: '#7EA19B',
  fontSize: 12,
  lineHeight: 16,
  letterSpacing: 1,
  marginBottom: 12,
  fontFamily: 'MontserratSemiBold',
 },
 textStyle: {
  fontSize: 18,
  lineHeight: 24,
  letterSpacing: 2,
  color: '#fff',
  marginTop: 65,
  marginBottom: 16,
  textAlign: 'center',
  fontFamily: 'MontserratSemiBold',
 },
 logoStyle: {
  top: -54,
  position: 'absolute',
  left: CARD_WIDTH / 2 - LOGO_HALF_WIDTH,
 },
});
