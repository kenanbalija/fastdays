import moment from 'moment-hijri';

// Build 13th-15th of a given Hijri month (baseMoment should be at start of iMonth)
const buildWhiteDays = (baseMoment, today) => {
  return [13, 14, 15].map((d) => {
    const m = baseMoment.clone().iDate(d).startOf('day');
    const inDays = m.diff(today, 'days');

    let status = 'upcoming';
    if (inDays === 0) status = 'today';
    else if (inDays < 0) status = 'done';

    return {
      key: m.format('YYYY-MM-DD'),
      label: m.format('ddd, D MMM YYYY'),
      hijriLabel: m.format('iD iMMMM iYYYY'),
      inDays,
      hijriDay: d,
      status,
    };
  });
};

// Returns list for current month (relative to today) plus next if passed
export const getWhiteDaysList = (today) => {
  const list = [];
  const currentMonthStart = today.clone().startOf('iMonth');
  list.push(...buildWhiteDays(currentMonthStart, today));

  if (today.iDate() > 15) {
    const nextMonthStart = currentMonthStart.clone().add(1, 'iMonth');
    list.push(...buildWhiteDays(nextMonthStart, today));
  }

  return list.sort((a, b) => (a.inDays > b.inDays ? 1 : -1));
}; 