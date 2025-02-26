import { FETCH_ACTIONS } from "./index1";

export const inventoryReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ACTIONS.PROGRESS:
      return { ...state, loading: true, error: null };
    case FETCH_ACTIONS.SUCCESS:
      return { ...state, loading: false, items: action.data };
    case FETCH_ACTIONS.ERROR:
      return { ...state, loading: false, error: action.error };
    case FETCH_ACTIONS.DELETE:
      return { ...state, items: state.items.filter(item => item.id !== action.id) };
    default:
      return state;
  }
};

export const initialState = {
  items: [],
  loading: false,
  error: null,
};