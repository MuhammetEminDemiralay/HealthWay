import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from "../../firebaseConfig";

export const login = createAsyncThunk("auth/login", async ({ email, password }: any) => {
    try {

        console.log(email);
        console.log(password);
        
        
        const auth = getAuth(app);
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)

        console.log(auth);
        
        const user = userCredentials.user
        const token = await user.getIdToken();

        return {
            user: user,
            token: token
        }

    } catch (error) {
        throw error
    }
})

export const register = createAsyncThunk("auth/register", async ({ email, password }: any) => {
    try {
        const auth = getAuth();
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user
        const token = await user.getIdToken();

        return {
            user: user,
            token: token
        }

    } catch (error) {
        throw error
    }
})

export const googleSigning = createAsyncThunk("auth/googleSigning", async () => {
    try {

    } catch (error) {
        throw error
    }
})

interface InitalState {
    isLoading: boolean,
    isAuth: boolean,
    token: string,
    user: any,
    error: string | undefined
}

const initialState: InitalState = {
    isLoading: false,
    isAuth: false,
    token: "",
    user: {},
    error: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Login
        builder
            .addCase(login.pending, (state) => {
                state.isAuth = false;
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true;
                state.isLoading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.error.message;
            })

            // Register
            .addCase(register.pending, (state) => {
                state.isAuth = false;
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isAuth = true;
                state.isLoading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.error.message;
            })

            // Google Signin
            .addCase(googleSigning.pending, (state, action) => {

            })
            .addCase(googleSigning.fulfilled, (state, action) => {

            })
            .addCase(googleSigning.rejected, (state, action) => {

            })


    }
})


export default authSlice.reducer