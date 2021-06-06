import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUserEffect } from '../effects/usersEffect';

export interface IUser {
  firstName:  string;
  lastName:  string;
  email: string;
  password:  string;
  rePassword?: string;
}

export interface IRegisterState {
  error: string | null;
  user: IUser
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    error: null,
    user: {
        firstName: '',
        lastName: '',
        email:'',
        password: ''
    }
  },
  reducers: {
    registerUser: (state, action: PayloadAction<IUser>) => {
      console.log("Registedring user with state");
      console.log(state);
      console.log(action.payload);
    },
    registerUserSuccess: (state: IRegisterState, action: PayloadAction<IRegisterState>) => {
      state.user.firstName = 'John';
      state.user.password = '';
    },
    registerUserFailed: (state: IRegisterState, action) => {
        state.error = 'user already exists';
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUserEffect.fulfilled, (state: IRegisterState, action) => {
      state.error = null
    });
    builder.addCase(registerUserEffect.rejected, (state: IRegisterState, action: any) => {
      state.error = action.payload.error;
    });
  },
})

// Action creators are generated for each case reducer function
export const { registerUser, registerUserSuccess, registerUserFailed } = usersSlice.actions;

export default usersSlice.reducer;