import { getAPIClient } from './APIClient';
import ActionType from './ActionType';
import { authentication } from '../authentication';

const ACCOUNT_REGISTER_REQUEST = 'account/register/';
const ACCOUNT_LOGIN_REQUEST = 'account/login/';
const ACCOUNT_DETAIL_REQUEST = 'account/detail/';
const BOUTY_TASKS_REQUEST = 'bounty/tasks/';
const BOUTY_TASK_CLAIM_REQUEST = 'bounty/task_claim/';
const BOUTY_CLAIMS_REQUEST = 'bounty/claims/';
const ADMIN_PENDING_BOUNTY_CLAIMS_REQUEST = 'admin/pending_bounty_claims/';
const ADMIN_REJECT_BOUNTY_CLAIM_REQUEST = 'admin/reject_bounty_claim/';
const ADMIN_APPROVE_BOUNTY_CLAIM_REQUEST = 'admin/approve_bounty_claim/';

export function accountRegister(request, onFinish, onError) {
    getAPIClient(false).post(ACCOUNT_REGISTER_REQUEST, request)
        .then((response) => {
            onFinish(response);
        })
        .catch((error) => {
            onError(error.response);
        });
}

export function accountLogin(request, onFinish, onError) {
    getAPIClient(false).post(ACCOUNT_LOGIN_REQUEST, request)
        .then((response) => {
            onFinish(response);
        })
        .catch((error) => {
            onError(error.response);
            authentication.removeToken();
        });
}

export function accountLogout() {
    authentication.removeToken();
    window.location = '/bounty/signin';
}

export function getAccountDetail() {
    const request = getAPIClient().get(ACCOUNT_DETAIL_REQUEST)
        .catch((error) => {
            if (error.response.status === 401) {
                // failed to get user account, invalid token
                authentication.removeToken();
                // redirect to login page
                window.location = '/bounty/signin';
            }
        });

    return {
        type: ActionType.ACCOUNT_DETAIL,
        payload: request,
    }
}

export function checkAccountAdmin() {
    const request = getAPIClient().get(ACCOUNT_DETAIL_REQUEST)
        .then((response) => {
            const result = response.data;
            if (!result['is_staff']) {
                // redirect to login page
                window.location = '/';
            }
        })
        .catch((error) => {
            if (error.response.status === 401) {
                // failed to get user account, invalid token
                authentication.removeToken();
                // redirect to login page
                window.location = '/';
            }
        });
}

export function getBountyTasks() {
    const request = getAPIClient().get(BOUTY_TASKS_REQUEST);

    return {
        type: ActionType.BOUNTY_TASKS,
        payload: request,
    }
}

export function getBountyTask(id) {
    const request = getAPIClient().get(`${BOUTY_TASKS_REQUEST}${id}/`);

    return {
        type: ActionType.BOUNTY_TASK,
        payload: request,
    };
}

export function postBountyTaskClaim(request, onFinish, onError) {
    getAPIClient().post(BOUTY_TASK_CLAIM_REQUEST, request)
        .then((response) => {
            onFinish(response);
        })
        .catch((error) => {
            onError(error.response);
        });
}

export function getBountyClaims() {
    const request = getAPIClient().get(BOUTY_CLAIMS_REQUEST);

    return {
        type: ActionType.BOUNTY_CLAIMS,
        payload: request,
    }
}

export function getPendingBountyClaims() {
    const request = getAPIClient().get(ADMIN_PENDING_BOUNTY_CLAIMS_REQUEST);

    return {
        type: ActionType.ADMIN_PENDING_BOUNTY_CLAIMS,
        payload: request,
    }
}

export function postRejectBountyClaim(request, onFinish, onError) {
    getAPIClient().post(ADMIN_REJECT_BOUNTY_CLAIM_REQUEST, request)
        .then((response) => {
            onFinish(response);
        })
        .catch((error) => {
            onError(error.response);
        });
}

export function postApproveBountyClaim(request, onFinish, onError) {
    getAPIClient().post(ADMIN_APPROVE_BOUNTY_CLAIM_REQUEST, request)
        .then((response) => {
            onFinish(response);
        })
        .catch((error) => {
            onError(error.response);
        });
}
