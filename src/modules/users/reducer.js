import { USER_UPDATE } from "./actions";

const defaultVisualState = {};
const initialState = {
  data: [],
  profile: {},
  loading: {},
  isEditing: {},
};

function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}

export default usersReducer;
