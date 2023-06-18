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
    }
}

export default AuthService;