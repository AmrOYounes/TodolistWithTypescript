import {USER_LOGIN, USER_LOGOUT} from "./userActionsType";

const loginUser  = () => {
  return {
    type: USER_LOGIN,
  };
};

const userLogout = () => {
  return {
    type: USER_LOGOUT, 
  };
};

 
export { loginUser, userLogout };
