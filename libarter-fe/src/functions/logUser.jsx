export const logUser = (jwt) => {
    sessionStorage.removeItem("JWT");
    sessionStorage.setItem("JWT", jwt);
}