const TOKEN_KEY: string  = 'AccessToken';
export const isLogin = () => {
    if(localStorage.getItem(TOKEN_KEY)) {
        return true
    }
    return false;
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}
