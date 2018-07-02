import { checkAccountAdmin } from './actions';

let TOKEN_KEY = 'EON_ACCESS_TOKEN'; // prod

if (process.env.NODE_ENV === 'dev') {
    TOKEN_KEY = 'DEV_EON_ACCESS_TOKEN'; // dev
}
else if (process.env.NODE_ENV === 'beta') {
    TOKEN_KEY = 'BETA_EON_ACCESS_TOKEN'; // beta
}

class Authentication {
    constructor() {
    }

    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    setToken(value) {
        localStorage.setItem(TOKEN_KEY, value);
    }

    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    }

    hasToken() {
        return !!localStorage.getItem(TOKEN_KEY);
    }

    requireAuth() {
        if (!this.hasToken())
        {
            // redirect to login page
            window.location = '/bounty/signin';
        }
    }

    requireAdmin() {
        this.requireAuth();
        checkAccountAdmin();
    }
}

export const authentication = new Authentication();
