import {
  queryArticleAll,
  queryArticleList,
  createArticle,
  deleteArticle,
  updateArticle,
  queryArticleOne,
  increaseView,
} from 'services/blogsRedux';

export default {
  namespace: 'blogs',

  state: {
    // query: {},
    // filter: {},
    data: [],
  },
  effects: {
    *fetchListArticle({ payload, callback }, { call }) {
      const response = yield call(queryArticleList, payload);
      // const page = yield select(state => state.users.page);
      if (response) {
        // yield put({ type: 'saveArticle', payload: response || {} });
      }
      if (callback) callback(response);
    },
    *fetchAllArticle({ callback }, { put, call }) {
      const response = yield call(queryArticleAll);
      // const page = yield select(state => state.users.page);
      if (response) {
        yield put({ type: 'save', payload: response || [] });
      }
      if (callback) callback(response);
    },
    *fetchOneArticle({ payload, callback }, { call }) {
      const response = yield call(queryArticleOne, payload);
      if (response) {
        // yield put({ type: 'save', payload: response || [] });
      }
      if (callback) callback(response);
    },
    *postOneArticle({ payload, callback }, { call }) {
      console.log('paylaod', payload);
      const response = yield call(createArticle, payload);
      if (response) {
        // yield put({ type: 'saveArticle', payload: response || {} });
      }
      if (callback) callback(response);
    },
    *deleteOneArticle({ payload, callback }, { call }) {
      const response = yield call(deleteArticle, payload);
      if (response) {
        // yield put({ type: 'saveArticle', payload: response || {} });
      }
      if (callback) callback(response);
    },
    *updateOneArticle({ payload, callback }, { call }) {
      const response = yield call(updateArticle, payload);
      if (response) {
        // yield put({ type: 'saveArticle', payload: response || {} });
      }
      if (callback) callback(response);
    },
    *increaseViewArticle({ payload, callback }, { call }) {
      const response = yield call(increaseView, payload);
      if (response) {
        // yield put({ type: 'saveArticle', payload: response || {} });
      }
      if (callback) callback(response);
    },
  },

  reducers: {
    save(state, action) {
      // console.log('action', action.payload);
      return { ...state, data: action.payload };
    },
  },
};
