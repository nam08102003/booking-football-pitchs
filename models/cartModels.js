const cartName = 'cart';
export default {
  namespace: 'cart',

  state: {
    dataCart: {},
  },
  effects: {
    createCart(_, { put }) {
      put({
        type: 'createCart',
      });
    },
    increaseItem({ payload }, { put }) {
      put({
        type: 'increaseItem',
        payload,
      });
    },
  },

  reducers: {
    createCart(state) {
      // cartName =cartName;
      const listProducts = localStorage.getItem(cartName)
        ? JSON.parse(localStorage.getItem(cartName))
        : state.dataCart;
      return {
        ...state,
        dataCart: listProducts,
      };
    },
    increaseItem(state, action) {
      // console.log('sa', action);
      // const { addItem } = action;
      // const newItem = { ...addItem };
      localStorage.setItem(cartName, JSON.stringify(action.payload));
      // console.log('newItem', newItem);

      return {
        ...state,
        dataCart: action.payload,
      };
    },
  },
};
