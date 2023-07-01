const AuthService = {

    /**
     * 
     * @returns Boolean whether the user is authenticated or not
     */
    checkAuth(){
       return localStorage.getItem('elimuendelezi_token') ? true : false;
    },

    /**
     * 
     * @returns token string
     */
    token(){
        let token;
        if(this.checkAuth()) {
            token = localStorage.getItem('elimuendelezi_token');
        }
        return token;
    },
    setUser(user) {
        localStorage.removeItem('elimuendelezi_user');
        localStorage.setItem('elimuendelezi_token', JSON.stringify(user));
    },
    setToken(token) {
        localStorage.removeItem('elimuendelezi_token');
        localStorage.setItem('elimuendelezi_token', JSON.stringify(token));
    }
}

export default AuthService;