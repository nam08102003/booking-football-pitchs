import { creatBanking, deleteBookings, fetchBookings, updateBookings } from 'services/bookingRedux';

export default {
  namespace: 'bookings',
  state: {},
  effects: {
    *fetch({ callback }, { call }) {
      const res = yield call(fetchBookings);
      if (callback) callback(res);
    },
    *add({ payload: { params }, callback }, { call }) {
      const res = yield call(creatBanking, params);
      if (callback) callback(res);
    },
    *update({ payload: { params, id }, callback }, { call }) {
      const res = yield call(updateBookings, params, id);
      if (callback) callback(res);
    },
    *delete({ payload: { params, id }, callback }, { call }) {
      const res = yield call(deleteBookings, params, id);
      if (callback) callback(res);
    },
  },
  reducers: {},
};
