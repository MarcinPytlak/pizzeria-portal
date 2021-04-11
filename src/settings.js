export const api = {
  // eslint-disable-next-line eqeqeq
  url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
  tables: 'tables',
  product: 'product',
  order: 'order',
  booking: 'booking',
  event: 'event',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};