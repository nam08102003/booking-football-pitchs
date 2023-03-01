// let cartName = 'pitch';
import {
  createPitchs,
  deletePitchs,
  fetchActivePitchs,
  fetchAllPitchs,
  fetchOnePitchs,
  filterPitchs,
  findEmptyPitchs,
  updatePitchs,
} from 'services/pitchsRedux';

export default {
  namespace: 'pitch',

  state: {
    data: [],
    loading: true,
  },
  effects: {
    *fetch({ callback }, { put, call }) {
      // console.log('payload', payload);
      const res = yield call(fetchAllPitchs);
      // console.log('res', res);
      if (res) {
        yield put({ type: 'save', payload: res.data.result || [] });
      }
      if (callback) callback(res);
    },
    *fetchListPage({ payload: { params }, callback }, { call }) {
      const res = yield call(fetchActivePitchs, params);
      if (callback) callback(res);
    },
    *fetchOne({ payload: { id }, callback }, { call }) {
      // console.log('payload', payload);
      const res = yield call(fetchOnePitchs, id);
      // console.log('res', res);
      // if (res) {
      //   yield put({ type: 'save', payload: res.data.result || [] });
      // }
      if (callback) callback(res);
    },
    *add({ payload, callback }, { call }) {
      const res = yield call(createPitchs, payload);
      if (callback) callback(res);
    },
    *delete({ payload: { id }, callback }, { call }) {
      const res = yield call(deletePitchs, id);
      if (callback) callback(res);
    },
    *update({ payload: { id, params }, callback }, { call }) {
      // console.log('paylaod', payload);
      const res = yield call(updatePitchs, params, id);
      if (callback) callback(res);
    },
    *findEmpty({ payload: { params }, callback }, { call }) {
      // console.log('paylaod', payload);
      const res = yield call(findEmptyPitchs, params);
      if (callback) callback(res);
    },
    *filter({ payload: { params }, callback }, { call }) {
      // console.log('paylaod', payload);
      const res = yield call(filterPitchs, params);
      if (callback) callback(res);
    },
  },

  reducers: {
    save(state, action) {
      // console.log('action', action.payload);
      return { ...state, data: action.payload };
    },
  },
};
