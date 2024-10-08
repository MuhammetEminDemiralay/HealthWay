import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithCredential, signInWithEmailAndPassword, signOut, UserInfo } from 'firebase/auth'
import app from "../../firebaseConfig";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Auth } from "../model/auth";


GoogleSignin.configure({
    webClientId: '729381340976-18c3lf4bpqu4s1t3ov1a1ds7matt35vp.apps.googleusercontent.com',
    forceCodeForRefreshToken: true,
});




export const login = createAsyncThunk("auth/login", async ({ email, password }: any) => {
    try {
        const auth = getAuth(app);
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredentials.user
        const token = await user.getIdToken();
        await AsyncStorage.setItem("_token", token);
        await AsyncStorage.setItem("_uid", user.uid);

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
        const auth = getAuth(app);
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user
        const token = await user.getIdToken();
        await AsyncStorage.setItem("_token", token);
        await AsyncStorage.setItem("_uid", user.uid);

        return {
            user: user,
            token: token
        }

    } catch (error) {
        throw error
    }
})

export const googleSignin = createAsyncThunk("auth/googleSignin", async () => {
    try {
        const auth = getAuth(app);
        const currentUser = GoogleSignin.getCurrentUser();

        if (currentUser != null) {
            try {
                await GoogleSignin.signOut();
            } catch (error) {
                console.error(error);
            }
        }

        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();

        const googleCredentials = GoogleAuthProvider.credential(idToken)           // Bizim eklediklerimiz //idToken sayesinde id ile giriş yap sağlıyıruz

        const data = await signInWithCredential(auth, googleCredentials);

        if (googleCredentials.idToken) {
            await AsyncStorage.setItem("_token", googleCredentials.idToken);
            await AsyncStorage.setItem("_uid", data.user.uid);
            return data.user.uid;
        } else {
            return null;
        }

    } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("user cancelled the login flow");

        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("operation (e.g. sign in) is in progress already");
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("play services not available or outdated");
        } else {
            console.log("some other error happened");
        }
    }
})


export const resetPassword = createAsyncThunk("password/reset", async (email: string) => {
    try {
        const auth = getAuth(app);
        await sendPasswordResetEmail(auth, email)
    } catch (error) {
        throw error
    }
})


export const autoLogin = createAsyncThunk("auth/autoLogin", async () => {
    try {
        const token = await AsyncStorage.getItem("_token")
        const uid = await AsyncStorage.getItem("_uid")

        if (token) {
            return {
                token,
                uid
            }
        } else {
            throw Error("User not found!")
        }
    } catch (error) {
        throw error
    }
})

export const logout = createAsyncThunk("auth/logout", async () => {
    try {
        const auth = getAuth(app);
        await AsyncStorage.removeItem("_token")
        await AsyncStorage.removeItem("_uid")

        await signOut(auth);
    } catch (error) {
        throw error
    }
})



const initialState: Auth = {
    isLoading: false,
    isAuth: false,
    token: "",
    error: "",
    user: {} as UserInfo,
    uid: null
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
                state.uid = action.payload.user.uid;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.error.message;
            })

            // Google Signin
            .addCase(googleSignin.pending, (state, action) => {
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(googleSignin.fulfilled, (state, action) => {
                state.isAuth = true;
                state.isLoading = false;
                state.uid = action.payload
            })
            .addCase(googleSignin.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
            })

            // Auto Login

            .addCase(autoLogin.pending, (state) => {
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(autoLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.token = action.payload.token;
                state.uid = action.payload.uid;
            })
            .addCase(autoLogin.rejected, (state, action) => {
                state.error = action.error.message;
                state.isAuth = false;
            })

            // Logout
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuth = false;
                state.token = "";
                state.uid = null;
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.error = action.error.message;
                state.isAuth = false;
            })

    }
})


export default authSlice.reducer