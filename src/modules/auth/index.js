const AuthService = {
    checkAuth(){
       return localStorage.getItem('elimuendelezi_token') ? true : false;
    }
    token: () => {
        let token;
        if(checkAuth()) {
            token = localStorage.getItem('elimuendelezi_token');
        }
        return token;
    }
}

export default AuthService;