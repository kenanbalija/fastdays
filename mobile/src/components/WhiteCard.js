import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Badge, Text } from 'react-native-paper';

const WhiteCard = ({ item }) => {
  const bgMap = { 13: '#ecfdf5', 14: '#eff6ff', 15: '#fffbeb' };
  const bg = bgMap[item.hijriDay] || '#fff';

  const isToday = item.status === 'today';

  const badgeStyles = [styles.badge];
  if (item.status !== 'upcoming') badgeStyles.push(styles.badgeSuccess);
  if (isToday) badgeStyles.push(styles.badgeToday);

  const badgeText = isToday
    ? 'Today'
    : item.status === 'done'
    ? 'Done'
    : `in ${item.inDays}d`;

  const cardStyles = [styles.card, { backgroundColor: bg }];
  if (isToday) cardStyles.push(styles.cardToday);

  const pillStyles = [styles.dayPill];
  if (isToday) pillStyles.push(styles.dayPillToday);

  return (
    <Card mode="contained" style={cardStyles}>
      <View style={styles.cardInner}>
        <View style={pillStyles}>
          <Text style={styles.dayPillText} variant="titleMedium">
            {item.hijriDay}
          </Text>
        </View>
        <View style={styles.cardBody}>
          <Text variant="bodyMedium" style={styles.cardDate}>
            {item.label}
          </Text>
          <Text variant="bodySmall" style={styles.cardHijri}>
            {item.hijriLabel}
          </Text>
        </View>
        <Badge style={badgeStyles}>{badgeText}</Badge>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    elevation: 2,
    overflow: 'hidden',
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  dayPill: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#06b6d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayPillText: {
    color: '#fff',
  },
  cardBody: {
    flex: 1,
    marginHorizontal: 12,
  },
  cardDate: {
    fontWeight: '600',
  },
  cardHijri: {
    color: '#6b7280',
  },
  badge: {
    backgroundColor: '#4f46e5',
    color: '#fff',
    paddingHorizontal: 12,
    minWidth: 60,
  },
  badgeSuccess: {
    backgroundColor: '#10b981',
  },
  badgeToday: {
    backgroundColor: '#f59e0b',
  },
  cardToday: {
    borderWidth: 2,
    borderColor: '#f59e0b',
  },
  dayPillToday: {
    backgroundColor: '#f59e0b',
  },
});

export default WhiteCard; 