export default {
  namespace: 'editor',

  state: {
    data: null,
  },
  effects: {
    *changeEditor({ payload }, { put }) {
      yield put({
        type: 'save',
        payload,
      });
    },
  },

  reducers: {
    save(state, action) {
      // console.log('action', action.payload);
      return {
        ...state,
        data: action.payload.value || action.payload,
      };
    },
  },
};
