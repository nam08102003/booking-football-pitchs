import { login, register, logout } from 'services/authRedux';

export default {
  namespace: 'auth',

  state: {
    // query: {},
    // filter: {},
  },
  effects: {
    *fetchLogin({ payload, callback }, { call }) {
      const response = yield call(login, payload);
      // if (response) {
      //   yield put({ type: 'login', payload: response.data || {} });
      // }
      if (callback) callback(response);
    },
    *fetchRegister({ payload, callback }, { call }) {
      const response = yield call(register, payload);

      if (callback) callback(response);
    },
    *fetchLogout({ payload, callback }, { call }) {
      const response = yield call(logout, payload);

      if (callback) callback(response);
      // yield put({ type: 'logout' });
      // if (callback)
      //   callback({
      //     isLogout: true,
      //   });
    },
  },

  reducers: {
    // login(state, action) {
    //   let isLogin = false;
    //   if (action.payload.success) {
    //     isLogin = true;
    //   }
    //   return {
    //     ...state,
    //     isLogin,
    //     user: action,
    //   };
    // },
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
