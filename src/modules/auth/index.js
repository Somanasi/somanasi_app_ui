const AuthService = {
    checkAuth(){
       return localStorage.getItem('elimuendelezi_token') ? true : false;
    },
    token(){
        let token;
        if(this.checkAuth()) {
            token = localStorage.getItem('elimuendelezi_token');
        }
        return token;
    }
}

export default AuthService;