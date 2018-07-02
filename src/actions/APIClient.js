import axios from 'axios';
import { authentication } from '../authentication';

let ROOT_ENDPOINT = 'https://api.eontoken.io/'; // prod

if (process.env.NODE_ENV === 'dev') {
    ROOT_ENDPOINT = 'http://127.0.0.1:8000/'; // local
}
else if (process.env.NODE_ENV === 'beta') {
    // ROOT_ENDPOINT = 'http://beta.eontoken.io:9000/'; // beta testing
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

export function getAPIClient(requireAuth=true) {
    if (requireAuth) {
        if (authentication.hasToken()) {
            return axios.create({
                baseURL: ROOT_ENDPOINT,
                timeout: 1000,
                headers: { 'Authorization': 'Token ' + authentication.getToken() },
            });
        }
        else {
            return null;
            // dummy api client to prevent send real request
            // return {
            //     get: () => {
            //         return {
            //             catch: () => {},
            //         };
            //     },
            //     post: () => {
            //         return {
            //             then: () => {
            //                 return {
            //                     catch: () => {},
            //                 };
            //             },
            //         };
            //     },
            // };
        }
    }
    return axios.create({
        baseURL: ROOT_ENDPOINT,
        timeout: 1000,
    });
}
