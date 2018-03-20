export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
  LOGOUT: 'auth/LOGOUT',
}

const initialState = {
  loading: false,
  isAuthenticated: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: false,
        loading: true,
        error: null,
      })
    case Types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        loading: false,
      })
    case Types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        loading: false,
        error: action.payload.message,
      })
    case Types.LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        loading: false,
      })
    default:
      return state
  }
};

export default reducer
