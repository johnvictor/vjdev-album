import { createAsyncThunk } from "@reduxjs/toolkit"
import { registerUserHttp } from "../../services/httpService";
import { IUser } from "../reducers/users";

const registerUserEffect = createAsyncThunk(
    'users/fetchByIdStatus',
    async (user : IUser, {rejectWithValue}) => {
        console.log(user);
        let response: any;
        try {
            response = await registerUserHttp(user);        
            return response.data;
        } catch (err: any) {
            if (err.response.status === 409) {
                return rejectWithValue(err.response.data);
            }
        }
    }
);

export { registerUserEffect };