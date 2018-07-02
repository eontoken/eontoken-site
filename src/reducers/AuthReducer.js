import ActionType from '../actions/ActionType';

export default function(state = {}, action) {
    switch (action.type) {
        case ActionType.ACCOUNT_DETAIL:
            if (!action.payload || !action.payload.data)
                return state;
            const account = action.payload.data;
            return { ...state, ['account']: account };
    }

    return state;
}
