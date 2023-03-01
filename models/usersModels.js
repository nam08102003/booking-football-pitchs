import {
  queryAccountAll,
  queryAccountList,
  createAccount,
  deleteAccount,
  updateAccount,
} from 'services/usersRedux';

export default {
  namespace: 'accounts',

  state: {
    // query: {},
    // filter: {},
    dataAccountAll: [],
  },
  effects: {
    *fetchListAccount({ payload, callback }, { call }) {
      const response = yield call(queryAccountList, payload);
      // const page = yield select(state => state.users.page);
      if (response) {
        // yield put({ type: 'saveAccount', payload: response || {} });
      }
      if (callback) callback(response);
    },
    *fetchAllAccount({ payload, callback }, { call }) {
      const response = yield call(queryAccountAll, payload);
      // const page = yield select(state => state.users.page);
      if (response) {
        // yield put({ type: 'saveAccount', payload: response || {} });
      }
      if (callback) callback(response);
    },
    *postOneAccount({ payload, callback }, { call }) {
      const response = yield call(createAccount, payload);
      if (response) {
        // yield put({ type: 'saveAccount', payload: response || {} });
      }
      if (callback) callback(response);
    },
    *deleteOneAccount({ payload, callback }, { call }) {
      const response = yield call(deleteAccount, payload);
      if (response) {
        // yield put({ type: 'saveAccount', payload: response || {} });
      }
      if (callback) callback(response);
    },
    *updateOneAccount({ payload, callback }, { call }) {
      const response = yield call(updateAccount, payload);
      if (response) {
        // yield put({ type: 'saveAccount', payload: response || {} });
      }
      if (callback) callback(response);
    },
  },

  reducers: {},
};
