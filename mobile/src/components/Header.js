import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

const Header = ({ today }) => (
  <LinearGradient
    colors={['#4f46e5', '#06b6d4']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.header}
  >
    <View style={{ flex: 1 }}>
      <Text style={styles.heroDate} variant="titleMedium">
        {today.format('dddd · D MMM YYYY')}
      </Text>
      <Text style={styles.heroHijri} variant="titleSmall">
        {today.format('iD iMMMM iYYYY')} AH
      </Text>
      <Text style={styles.heroLabel} variant="bodyMedium">
        White Days
      </Text>
    </View>
    <Feather name="moon" size={32} color="#fff" />
  </LinearGradient>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  heroDate: {
    color: '#fff',
  },
  heroHijri: {
    color: '#e0e0e0',
    marginTop: 2,
  },
  heroLabel: {
    color: '#fff',
    marginTop: 8,
  },
});

export default Header; 