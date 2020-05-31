import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}


export function register(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_REGISTER_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_REGISTER_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GET_REGISTER_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}