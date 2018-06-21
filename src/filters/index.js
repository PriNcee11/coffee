// import Vue from 'vue';
// import moment from '@/plugins/moment';
// import { typeToIcon as taxonomyTypeToIcon } from '@/modules/taxonomy/config';

// Vue.filter('formatDate', (value, format = 'DD/MM/YYYY - hh:mm') => {
//   if (!value) return '';
//   value = value.toString();
//   return moment(value).format(format);
// });

// Vue.filter('formatDateFromNow', (value, format = 'DD/MM/YYYY - hh:mm') => {
//   const mNow = moment();
//   const mDate = moment(value);
//   if (mNow.diff(mDate, 'days') > 1) {
//     return mDate.format(format);
//   }
//   return mDate.fromNow();
// });

// Vue.filter('trunc', (value, limit = 60) => {
//   if (!value) return '';
//   value = value.toString().trim();
//   if (value.length < limit) return value;
//   return `${value
//     .trim()
//     .substring(0, limit)
//     .trim()}…`;
// });

// Vue.filter('capitalize', (value) => {
//   if (!value) return '';
//   value = value.toString();
//   return value.charAt(0).toUpperCase() + value.slice(1);
// });

// Vue.filter('highlight', (value, highlight = '', wrapTag = 'strong') =>
//   value.replace(new RegExp(`(${highlight})`, 'i'), `<${wrapTag}>$1</${wrapTag}>`));

// Vue.filter('taxonomyIcon', value => taxonomyTypeToIcon(value));
