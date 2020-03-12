export const initialState = {
    authData: {
        isAuthorized: false,
        authToken: "",
        authTokenExpires: new Date(),
        refreshToken: "",
        refreshTokenExpires: new Date()
    },
    isError: false,
    errors: [],
    redirectUrl: "/"
}