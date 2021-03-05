const initialState: IInitialState = {
  user: null,
}

export interface IInitialState {
  user: any
}

const reducer = (state = initialState, action: any) => {
  console.log(state)
  console.log(action.type, action.payload)
  switch (action.type) {
    case 'USER_SIGN_IN':
      return {
        user: action.payload,
      }
    case 'USER_LOG_OUT':
      return {
        user: null,
      }
    default:
      return state
  }
}

export default reducer
