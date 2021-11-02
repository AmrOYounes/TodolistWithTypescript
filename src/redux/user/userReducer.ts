import {USER_LOGIN, USER_LOGOUT } from "./userActionsType";

const initialState = {
  isAuth: false,
}


const userReducer = (state = initialState, action: userAction) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuth: true,
      };

    case USER_LOGOUT:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default userReducer;
