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
    <Text style={styles.textStyle}>4twiggers</Text>

    <View style={{ paddingHorizontal: 24 }}>
     <Text style={styles.commonTextStyle}>
      A partnership of software developers and designers based in Tbilisi.
     </Text>
     <Text style={styles.commonTextStyle}>
      We elevate startups, SMEs and large organizations by helping secure innovative, intuitive and
      cutting-edge products, tailored to individual business needs.
     </Text>
     <Text style={styles.commonTextStyle}>
      Always on the lookout for new projects and new talents.
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
