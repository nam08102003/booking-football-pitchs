import { login, register } from 'services/adminRedux';

export default {
  namespace: 'admin',

  state: {
    // query: {},
    // filter: {},
  },
  effects: {
    *adminLogin({ payload, callback }, { call, put }) {
      const response = yield call(login, payload);
      if (response) {
        yield put({ type: 'adminLogin', payload: response.data || {} });
      }
      if (callback) callback(response);
    },
    *adminRegister({ payload, callback }, { call }) {
      const response = yield call(register, payload);

      if (callback) callback(response);
    },
    // *logout({ callback }, { put }) {
    //   yield put({ type: 'logout' });
    //   if (callback)
    //     callback({
    //       isLogout: true,
    //     });
    // },
  },

  reducers: {
    adminLogin(state, action) {
      let isLogin = false;
      if (action.payload.success) {
        isLogin = true;
      }
      return {
        ...state,
        isLogin,
        user: action,
      };
    },
    // logout(state, action) {
    //   const isLogin = false;
    //   return {
    //     ...state,
    //     isLogin,
    //     user: action,
    //   };
    // },
  },
};
