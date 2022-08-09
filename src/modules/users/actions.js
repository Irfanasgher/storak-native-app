import { createRequestTypes, action } from "../common/actions";
export const USER_UPDATE = createRequestTypes("USER_UPDATE");

export const userActions = {
  userUpdate: {
    request: (data) => action(USER_UPDATE.REQUEST, { payload: data }),
    success: (data) => action(USER_UPDATE.SUCCESS, { payload: data }),
    failure: (data) => action(USER_UPDATE.FAILURE, { payload: data }),
  },
};

export default userActions;
