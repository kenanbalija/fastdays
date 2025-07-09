import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment-hijri';

import Header from '../components/Header';
import WhiteCard from '../components/WhiteCard';
import { getWhiteDaysList } from '../utils/whiteDays';

// Toggle mock date for testing (YYYY-MM-DD) or leave '' for real today
const MOCK_DATE = '';

const HomeScreen = () => {
  const initialToday = MOCK_DATE
    ? moment(MOCK_DATE, 'YYYY-MM-DD').startOf('day')
    : moment().startOf('day');

  const [today] = useState(initialToday);
  const [fastingDays, setFastingDays] = useState([]);

  useEffect(() => {
    setFastingDays(getWhiteDaysList(today));
  }, [today]);

  return (
    <View style={styles.container}>
      <Header today={today} />
      <FlatList
        data={fastingDays}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
        renderItem={({ item }) => <WhiteCard item={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        keyExtractor={(item) => item.key}
      />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen; 