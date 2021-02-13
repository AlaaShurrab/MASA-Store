import moment from 'moment';

const timeDifference = (date) => {
  const dateNow = moment(new Date());
  const orderDate = moment(new Date(date));
  return {
    days: dateNow.diff(orderDate, 'days'),
    hours: dateNow.diff(orderDate, 'hours'),
  };
};

export default timeDifference;
