import { UserInfo } from "firebase/auth";

export interface Auth {
    isLoading: boolean,
    isAuth: boolean,
    token: string,
    user: UserInfo | null,
    error: string | undefined,
    uid: string | null
}