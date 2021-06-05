import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    error: '',
    user: {
        firstName: '',
        lastName: '',
        email:'',
        password: ''
    }
  },
  reducers: {
    registerUser: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   state.value += 1
    },
    registerUserSuccess: (state) => {
      state.user.firstName = 'John';
      state.user.password = '';
    },
    registerUserFailed: (state, action) => {
        state.error = 'user already exists';
    },
  },
})

// Action creators are generated for each case reducer function
export const { registerUser, registerUserSuccess, registerUserFailed } = usersSlice.actions

export default usersSlice.reducer;