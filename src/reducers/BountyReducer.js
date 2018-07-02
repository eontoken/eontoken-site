import ActionType from '../actions/ActionType';

export default function(state = {}, action) {
    switch (action.type) {
        case ActionType.BOUNTY_TASKS:
            if (!action.payload || !action.payload.data)
                return state;
            const tasks = action.payload.data.results;
            return { ...state, ['tasks']: tasks };
        case ActionType.BOUNTY_TASK:
            if (!action.payload || !action.payload.data)
                return state;
            return {...state, ['task']: action.payload.data};
        case ActionType.BOUNTY_CLAIMS:
            if (!action.payload || !action.payload.data)
                return state;
            const claims = action.payload.data.results;
            return { ...state, ['claims']: claims };
        case ActionType.ADMIN_PENDING_BOUNTY_CLAIMS:
            if (!action.payload || !action.payload.data)
                return state;
            const pending_claims = action.payload.data.results;
            return { ...state, ['pending_claims']: pending_claims };
    }

    return state;
}
