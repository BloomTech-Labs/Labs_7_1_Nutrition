import decode from 'jwt-decode';

export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000' // API server domain
        this.fetch = this.fetch.bind(this) 
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }
    login(username, password) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/login`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            this.setToken(res.token) // Setting the token in localStorage
            return Promise.resolve(res);
        })
    }
    
    loggedIn() {
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token)
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if(decoded.exp < Date.now() / 1000) {
                return true;
            }
            else {
                return false;
            }
        }
        catch(err) {
                return false;
            }
        }

    setToken(idToken) {
            localStorage.setItem('id_token', idToken);
        }

    getToken() {
            return localStorage.getItem('id_token')
        }

    logout() {
            localStorage.removeItem('id_token');
        }

    getProfile() {
            return decode(this.getToken());
        }

    fetch(url, options) {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            if(this.loggedIn()) {
                headers['Authorization'] = 'Bearer' + this.getToken()
            }
            return fetch(url, {
                headers,
                ...options
            })
            .then(this._checkStatus)
            .then(res => res.json())
    }
    
    _checkStatus(res) {
            if(res.status >= 200 && res.status < 300) {
                return res
            } else {
                var err = new Error(res.statusText)
                err.res = res
                throw err
            }
        }
    }